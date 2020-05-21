import { Component, NgZone, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent} from '../dialog/dialog.component';
import { MeshBuilder, Light, Scene, Engine, CannonJSPlugin, Texture } from '@babylonjs/core/';
import { PhysicsImpostor, DirectionalLight, HemisphericLight } from '@babylonjs/core/';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import {Vector3, Color3, Quaternion } from '@babylonjs/core/Maths/math';
import { ArcRotateCamera, UniversalCamera} from '@babylonjs/core/Cameras';
import * as CANNON from 'cannon';
import { DiceBuilder } from './DiceBuilder';
import { Dice } from './Dice';
import { Rules } from './Rules';

@Component({
  selector: 'app-guru',
  templateUrl: './guru.component.html',
  styleUrls: ['./guru.component.css']
})
export class GuruComponent implements OnInit {

  private builder: DiceBuilder;
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private scene: Scene;
  private light: Light;

  private diceStatus = 0;  // 0 = NULL, 1 = rolled, 2=ready
  public POINTS = 0;
  public LEVEL = 1;
  public RULE = 0;
  public allowSkip = true;
  public answer = 0;
  public ruleSkips = 0;
  public checks = 0;
  public score = 0;
  private throws = 0;
  public gameEnd = false;
  private counts = [0, 0, 0, 0, 0, 0];
  public ruleinuse = 0;
  public ruleTests = 0;
  private deskMat;
  public progress = 0;
  public dices: Dice[];
  private rules: Rules;
  public faceValues: number[];
  public faceShapes: number[];
  public faceImgPath: string[];
  public testmode: boolean;
  public rolling: boolean;
  public tossing: boolean;

  @ViewChild('rendererCanvas', { static: true }) rendererCanvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('points') points: ElementRef;

  public constructor( private ngZone: NgZone, private window: Window,
                      private dialog: MatDialog, private titleService: Title, private metaService: Meta ) { }

  public ngOnInit(): void {
    this.builder = new DiceBuilder();
    this.rules = new Rules();
    this.createBoxScene();
    // this.createTestScene();
    this.dices = [];
    this.faceValues = [];
    this.faceImgPath = [];
    this.testmode = false;
    this.rolling = false;
    this.tossing = false;
    this.SetNextRule();
    // this.throw_testdice();
    this.render();
    setInterval(() => { this.readFaceValue(); }, 200);
   // setInterval(() => { this.updateFaceValue(); }, 200);
    // setInterval(()=>{ this.throw_dice()},1000);

  }

  public createBoxScene(): void {
    this.canvas = this.rendererCanvas.nativeElement;
    this.canvas.style.width = '500px';
    this.canvas.style.height =  '200px'; 
    this.engine = new Engine(this.canvas, true);
    // Create a rotating camera
    this.scene = new Scene(this.engine);
    const gravity = new Vector3(0,-100, 0);
    const physics = new CannonJSPlugin( true, 10, CANNON);

    this.scene.enablePhysics(gravity, physics);
    // const camera = new ArcRotateCamera('Camera', 0,0,0, Vector3.Zero(), this.scene);
    const camera = new UniversalCamera('Camera', new Vector3(0,32,0), this.scene);
    camera.rotationQuaternion = new Quaternion(0, -0.71, 0.71, 0 );

    // Attach it to handle user inputs (keyboard, mouse, touch)
    camera.attachControl(this.canvas, false);

    // Disable scene moving by direction key move
    camera.keysUp = [];
    camera.keysDown = [];
    camera.keysLeft = [];
    camera.keysRight = [];

    const light = new HemisphericLight('light', new Vector3(1, -1, -1), this.scene);
    light.intensity = 0.85;
    light.diffuse = new Color3(0.8, 0.95, 0.99);
    light.groundColor = new Color3(1, 1, 1);

    const ground = MeshBuilder.CreateGround('ground', {width: 60, height: 30}, this.scene);
    ground.position.y = 0;
    ground.checkCollisions = true;

    const leftWall = MeshBuilder.CreateBox('left', { width: 30, height: 200, depth: 10 }, this.scene );
    leftWall.rotation = new Vector3(0, -Math.PI/2, 0);
    leftWall.position.y = 20;
    leftWall.position.x = -35.0;
    leftWall.checkCollisions = true;

    const rightWall = MeshBuilder.CreateBox('right', { width: 30, height: 200, depth: 10}, this.scene);
    rightWall.rotation = new Vector3(0, -Math.PI/2, 0);
    rightWall.position.y = 20;
    rightWall.position.x = 35;
    rightWall.checkCollisions = true;

    const frontWall = MeshBuilder.CreateBox('front', { width: 60, height: 200, depth: 10}, this.scene);
    frontWall.position.y = 20;
    frontWall.position.z = -15;
    frontWall.checkCollisions = true;

    const backWall = MeshBuilder.CreateBox('back', {width: 60, height: 200, depth: 10}, this.scene);
    backWall.position.y = 20;
    backWall.position.z = 15;
    backWall.checkCollisions = true;

    this.deskMat = new StandardMaterial('groundMat', this.scene);
    const gtexture = new Texture( 'assets/image/dices/desktop/1.png', this.scene);
    this.deskMat.diffuseTexture = gtexture;
    this.deskMat.backFaceCulling = true;
    ground.material = this.deskMat;

    const wallMat = new StandardMaterial('wallMat', this.scene);
    wallMat.diffuseColor = new Color3(0.9,0.95,1);
    wallMat.backFaceCulling = false;

    const wallMat2 = new StandardMaterial('wallMat', this.scene);
    wallMat2.diffuseColor = new Color3(0.85,1,0.95);
    wallMat2.backFaceCulling = false;

    leftWall.material = wallMat;
    rightWall.material = wallMat;
    frontWall.material = wallMat2;
    backWall.material = wallMat2;
    ground.receiveShadows = true;

    // Physics
    ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.08, restitution: 1 }, this.scene);
    leftWall.physicsImpostor = new PhysicsImpostor(leftWall, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 }, this.scene);
    rightWall.physicsImpostor = new PhysicsImpostor(rightWall, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 }, this.scene);
    frontWall.physicsImpostor = new PhysicsImpostor(frontWall, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 }, this.scene);
    backWall.physicsImpostor = new PhysicsImpostor(backWall, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0, restitution: 1 }, this.scene);

    camera.detachControl(this.canvas);
  }

  private activePhysics(){
    this.scene.getPhysicsEngine().setGravity( new Vector3(0,-100,0));
  }

  private setDiceStill(){
    for ( const dice of this.dices ) {
      dice.body.physicsImpostor.setAngularVelocity(Vector3.Zero());
      dice.body.physicsImpostor.setLinearVelocity( Vector3.Zero());
    }
    this.scene.getPhysicsEngine().setGravity( new Vector3(0,0,0));
  }

  public readFaceValue() {
    if(this.dices.length < 1) { return; }
    if( this.diceStatus !== 1 ) { return; }

    for ( const dice of this.dices ) {
      if(!dice){ return; }
      if( Vector3.Distance(dice.body.physicsImpostor.getLinearVelocity(), Vector3.Zero()) > 0.1 ){
        return;
      }
      if( Vector3.Distance(dice.body.physicsImpostor.getAngularVelocity(), Vector3.Zero()) > 0.2 ){
        return;
      }
    }
    this.faceValues = [];
    this.faceImgPath = [];
    this.faceShapes = [];
    for ( const d of this.dices ) {
      let max = 0;
      let top = 0;
      if(!d){ return; }
      if(d.sharp){
        const f1n = d.body.getFacetNormal(1).y;
        if(f1n > max) { max = f1n; top = 1; }
        const f2n = d.body.getFacetNormal(3).y;
        if(f2n > max) { max = f2n; top = 2; }
        const f3n = d.body.getFacetNormal(5).y;
        if(f3n > max) { max = f3n; top = 3; }
        const f4n = d.body.getFacetNormal(7).y;
        if(f4n > max) { max = f4n; top = 4; }
        const f5n = d.body.getFacetNormal(9).y;
        if(f5n > max) { max = f5n; top = 5; }
        const f6n = d.body.getFacetNormal(11).y;
        if(f6n > max) { max = f6n; top = 6; }
      } else {
        const f1n = d.body.getFacetNormal(2).y;
        if(f1n > max) { max = f1n; top = 1; }
        const f6n = d.body.getFacetNormal(10).y;
        if(f6n > max) { max = f6n; top = 6; }
        const f2n = d.body.getFacetNormal(37).y;
        if(f2n > max) { max = f2n; top = 2; }
        const f3n = d.body.getFacetNormal(256).y;
        if(f3n > max) { max = f3n; top = 3; }
        const f4n = d.body.getFacetNormal(312).y;
        if(f4n > max) { max = f4n; top = 4; }
        const f5n = d.body.getFacetNormal(320).y;
        if(f5n > max) { max = f5n; top = 5; }
      }

      d.setTopSide(top);
      this.faceValues.push(d.getTopFaceValue());
      this.faceShapes.push(d.getTopFaceShape());
      this.faceImgPath.push(d.getTopPicPath());
      this.counts[top-1]++;
    }
    if(this.faceValues.length === this.dices.length){
      this.diceStatus = 2;
      this.POINTS = this.updatepoints(this.dices);
    }
    if(this.rolling) { this.rolling = false; }
    if(this.tossing) { this.tossing = false; }
    this.setDiceStill();
  }

  public getpicClass(c: number) {
    switch(c){
      case 0:
        return 'regpic';
      case 1:
        return 'vertpic';
      case 2:
        return 'horipic';
    }
  }

  private updatepoints(dices: Dice[]): number {
    return this.rules.getDiceSetPoints(dices);
  }

  public SetNextRule(){
    this.rules.setNewRule(this.LEVEL);
    this.RULE++;
    this.ruleTests = 0;
    this.throws = 0;
    this.throw_dice();
  }

  public throw_dice() {
    if(this.gameEnd){
      this.gameEnd = false;
      this.testmode = false;
      this.reset();
    }
    if(this.diceStatus === 1){ return;}
    this.activePhysics();
    this.rolling = true;
    this.answer = 0;
    if( this.dices.length > 0) {
      this.dices.forEach( mesh => {
        mesh.dispose();
      });
      this.dices = [];
      this.faceValues = [];
    }
    const diceList = this.rules.getDices();
    this.ruleinuse = this.rules.getRuleNum();
    for( const dicetype of diceList){
      const dice = new Dice(dicetype);
      dice.build(this.scene, this.builder, dicetype.Name);
      this.dices.push(dice);
      console.log('throw dice:  level-' + this.LEVEL + '-' + dicetype.Name);
    }

    if(this.throws++ > 5){
      this.score -= this.LEVEL;
      if(this.score < 0) { this.score = 0;}
    }
    this.diceStatus = 1;
  }

  public rolldice(index: number) {
    if(this.diceStatus === 1) { return; }
    if(this.faceValues.length < index) { return; }
    this.activePhysics();
    this.tossing = true;
    const n = index - 1;
    const forceDir = new Vector3(0, 1, 0);
    const forceMag = 250 + 100 * Math.random();
    const poshift = this.dices[n].long? 0.5 : 0;
    const contactPoint = new Vector3( this.randN(0.3,1)*this.randSign(), 0, this.randN(0.3+poshift,1+poshift)*this.randSign());
    this.dices[n].body.physicsImpostor.applyImpulse(forceDir.scale(forceMag), this.dices[n].body.getAbsolutePosition().add(contactPoint) );
    this.diceStatus = 1;
  }

  public TestRule(){
    this.testmode = !this.testmode;
    this.throw_dice();
  }

  SkipRule(){
    this.ruleSkips++;
    this.SetNextRule();
    if(this.ruleSkips > 4){
      this.allowSkip = false;
    } else {
      this.allowSkip = true;
    }
  }

  public CheckPoints(){
    if(this.gameEnd) { return ;}
    if( parseInt(this.points.nativeElement.value, 10) === this.POINTS ){
      this.answer = 1;
      this.progress += 25;
      this.ruleTests++;
      this.score += this.LEVEL * 2;
      if(this.ruleTests < 2){
        this.openMsgDialog(2-this.ruleTests, 5);
        return;
      }
      setTimeout( () => { this.testmode = false;}, 1000);
      if(this.RULE === 2){
       setTimeout( () => { this.upgradeLevel();}, 1200);
    } else {
      setTimeout( () => { this.SetNextRule();}, 1200);
    }
   } else {
     this.answer = 2;
     this.score -= this.LEVEL;
     if(this.score < 0) { this.score = 0; }
   }

    this.checks++;
    if(this.checks > 10){
      this.openGameEndDialog(false, 1);
    }
  }

  private upgradeLevel(){
    if(this.LEVEL === 10){
      this.openGameEndDialog(true, 9);
    } else {
      this.LEVEL++;
      this.RULE = 0;
      this.checks = 0;
      this.progress = 0;
      this.ruleSkips = 0;
      this.allowSkip = true;
      this.updateDeskColor();
      this.SetNextRule();
    }
  }

  private updateDeskColor(){
    switch(this.LEVEL){
      case 1:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/1.png', this.scene);
        break;
      case 2:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/2.png', this.scene);
        break;
      case 3:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/3.png', this.scene);
        break;
      case 4:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/4.png', this.scene);
        break;
      case 5:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/5.png', this.scene);
        break;
      case 6:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/6.png', this.scene);
        break;
      case 7:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/7.png', this.scene);
        break;
      case 8:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/8.png', this.scene);
        break;
      case 9:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/9.png', this.scene);
        break;
      case 10:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/10.png', this.scene);
        break;
      default:
        this.deskMat.diffuseTexture = new Texture( 'assets/image/dices/desktop/1.png', this.scene);
        break;
    }
  }

  private randN(min: number, max: number) {
    return Math.random()*(max-min) + min;
  }

  private randSign(): number {
    if(Math.random() > 0.5) {
      return 1;
    } else {
      return -1;
    }
  }

  private reset() {
    this.rules.resetRuleStatus();
    this.LEVEL = 1;
    this.score = 0;
    this.RULE = 0;
    this.checks = 0;
    this.ruleTests = 0;
  }

  public render(): void {
    // run this outside angular zones,
    // it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        // console.log(this.scene.activeCamera.position);
        // console.log(this.scene.activeCamera.absoluteRotation);
        if(! this.rolling && ! this.tossing) { return; }
        this.scene.render();
       // this.readFaceValue();
      };

      if (this.window.document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        this.window.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      this.window.addEventListener('resize', () => {
        console.log(window.innerWidth);
        if(window.innerWidth > 960){
          this.canvas.style.width = '960px';
          this.canvas.style.height = '384px';
        } else {
          this.canvas.style.width = window.innerWidth + 'px';
          this.canvas.style.height = 0.4 * window.innerWidth + 'px';
        }
        this.engine = new Engine(this.canvas, true);
        this.engine.resize();
      });
    });
  }

public createTestScene(): void {
  this.canvas = this.rendererCanvas.nativeElement;
  this.engine = new Engine(this.canvas, true);
  // Create a rotating camera
  this.scene = new Scene(this.engine);

  const camera = new ArcRotateCamera('Camera', 0,0,0, Vector3.Zero(), this.scene);
  camera.setPosition(new Vector3(0, 0, -15));
  // Attach it to handle user inputs (keyboard, mouse, touch)
  camera.attachControl(this.canvas, true);

  const light = new DirectionalLight('light', new Vector3(-100, -100, -100), this.scene);
  const light2 = new DirectionalLight('light', new Vector3(100, 100, 100), this.scene);

}

 public openGameEndDialog(win: boolean, type: number){
  const dialogRef = this.dialog.open(DialogComponent, {
    panelClass: 'dialogpanel',
    width: '350px',
    height: '350px',
    backdropClass: 'winbackdropbg',
    data: {Level: this.LEVEL, Tries: this.checks, Won: win, Tests: 0, Type: type}
  });

  dialogRef.afterClosed().subscribe(result => {
    if(type === 1 || type === 9) { // fail or won
      if(result === 1){ /*new game*/
        this.reset();
        this.SetNextRule();
        return;
      } else {
        this.gameEnd = true;
        return;
      }
    }
  });
}

public openMsgDialog(n: number, type: number){
  const dialogRef = this.dialog.open(DialogComponent, {
    panelClass: 'dialogpanel',
    width: '350px',
    height: '350px',
    backdropClass: 'winbackdropbg',
    data: {Level: this.LEVEL, Tries: this.checks, Won: false, Tests: n, Type: type}
  });

  setTimeout( () => { dialogRef.close(); }, 2000);

  dialogRef.afterClosed().subscribe(result => {
    this.throw_dice();
    this.points.nativeElement.value = null;
  });
}

public getlevelClass(){
  switch(this.LEVEL){
    case 1:
      return 'Level1Class';
    case 2:
      return 'Level2Class';
    case 3:
      return 'Level3Class';
    case 4:
      return 'Level4Class';
    case 5:
      return 'Level5Class';
    case 6:
      return 'Level6Class';
    case 7:
      return 'Level7Class';
    case 8:
      return 'Level8Class';
    case 9:
      return 'Level9Class';
    case 10:
      return 'Level10Class';
    default:
      return 'Level1Class';
  }
}

public throw_testdice() {
  // console.log('new throw');
  // if( this.dices.length > 0) {
  //   this.faceValues = [];
  //   this.dices.forEach( mesh => {
  //     mesh.dispose();
  //   });
  // }
  // const sharpDice = new Dice( new DiceType());
  // sharpDice.setSize(true);
  // sharpDice.buildSharp(this.scene, this.builder, 'bluereddice');
  // this.dices.push(sharpDice);

  // const positions = sharpDice.body.getFacetLocalPositions();
  // const normals = sharpDice.body.getFacetLocalNormals();
  // console.log('facetlength='+positions.length);
  // const lines = [];
  // for (let i = 0; i < 12; i++) {
  //     if(i > 32 ){
  //       continue;
  //     }
  //     if(i === 0 || i===2 || i === 4 || i===6 || i===8 || i===10) { continue;}

  //     if(i==1){ console.log('i='+i+ normals[i]);   normals[i] = normals[i].scale(1) }

  //    // if(i > 2 && i < 10) { continue;}
  //     if(i==3){ console.log('i='+i+ normals[i]);  normals[i] = normals[i].scale(1) }
  //     // if(i > 10 && i < 37){ continue;}
  //     if(i==5){ console.log('i='+i+ normals[i]);  normals[i] = normals[i].scale(1) }
  //     //if(i > 37 && i < 256){ continue;}
  //     if(i==7){ console.log('i='+i+ normals[i]);  normals[i] = normals[i].scale(1) }
  //     //if(i>256 && i < 312) { continue;}
  //     if(i==9){ console.log('i='+i+ normals[i]);  normals[i] = normals[i].scale(5) }
  //     if(i>312 && i < 320) { continue;}
  //     if(i==11){ console.log('i='+i+ normals[i]);  normals[i] = normals[i].scale(3) }

  //     const line = [ positions[i], positions[i].add(normals[i] ) ];
  //     lines.push(line);
  // }
  // const lineSystem = MeshBuilder.CreateLineSystem('l', {lines: lines}, this.scene);
  // lineSystem.color = Color3.Red();

}

}
