import {PhysicsImpostor} from '@babylonjs/core/';
import {Scene} from '@babylonjs/core/scene';
import {Vector3} from '@babylonjs/core/Maths/math';
import {Mesh} from '@babylonjs/core/Meshes/mesh';
import { DiceBuilder } from './DiceBuilder';
import { DiceType } from './DiceType';

export class Dice {

  private picPath: string[];
  private faceValue: number[];
  private faceShape: number[];
  private topSide: number;

  private wholepicpath: string;
  private xsize: number;
  private ysize: number;
  private zsize: number;

  public faceColor: string;
  public dotColor: string;
  public edgeTexture: string;
  public edgeColor: string;

  public sharp: boolean;
  public round: boolean;
  public long: boolean;
  public nullface: boolean;

  public body: Mesh;

  public constructor( dicetype: DiceType ) {
    this.picPath = [];
    this.faceValue = [];
    this.faceShape = [];
    this.xsize = 1;
    this.ysize = 1;
    this.zsize = 1;
    this.faceColor = dicetype.Face;
    this.dotColor = dicetype.Dot;
    this.edgeTexture = dicetype.Edge;
    this.edgeColor = this.getColorfromtexture(this.edgeTexture);
    this.round = dicetype.Round;
    this.sharp = dicetype.Sharp;
    this.long = dicetype.Long;
    this.nullface = dicetype.NullFace;
    this.setSize(this.long);
  }

  public setSize(long: boolean) {
    if(long){
      this.xsize = 1.8;
      this.ysize = 3.6;
      this.zsize = 1.8;
    } else {
      this.xsize = 2;
      this.ysize = 2;
      this.zsize = 2;
    }
    if(!long){
      this.faceShape.push(0);
      this.faceShape.push(0);
      this.faceShape.push(0);
      this.faceShape.push(0);
      this.faceShape.push(0);
      this.faceShape.push(0);
    } else {
      this.faceShape.push(0);
      this.faceShape.push(1);
      this.faceShape.push(1);
      this.faceShape.push(2);
      this.faceShape.push(2);
      this.faceShape.push(0);
    }
    this.setPicPath(this.faceColor, this.dotColor, this.sharp );
  }

  public setTopSide(top: number) {
    this.topSide = top;
  }

  public getTopFaceValue() {
    return this.faceValue[this.topSide - 1];
  }

  public getTopFaceShape() {
    return this.faceShape[this.topSide - 1];
  }

  public getTopPicPath() {
    return this.picPath[this.topSide - 1];
  }

  private setPicPath(faceColor: string, dotColor: string, sharp: boolean) {
    const picname = 'assets/image/dices/' + this.faceColor + '-' + this.dotColor + '-';
    if(!this.long){
      if(this.nullface){
        this.picPath.push(picname + '0.png');
        this.picPath.push(picname + '2.png');
        this.picPath.push(picname + '0.png');
        this.picPath.push(picname + '4.png');
        this.picPath.push(picname + '0.png');
        this.picPath.push(picname + '6.png');
      } else {
        this.picPath.push(picname + '1.png');
        this.picPath.push(picname + '2.png');
        this.picPath.push(picname + '3.png');
        this.picPath.push(picname + '4.png');
        this.picPath.push(picname + '5.png');
        this.picPath.push(picname + '6.png');
      }
    } else {
      this.picPath.push(picname + '1.png');
      this.picPath.push(picname + '2l.png');
      this.picPath.push(picname + '3l.png');
      this.picPath.push(picname + '4l.png');
      this.picPath.push(picname + '5l.png');
      this.picPath.push(picname + '6.png');
    }

    if(this.nullface){
      this.faceValue.push(0);
      this.faceValue.push(2);
      this.faceValue.push(0);
      this.faceValue.push(4);
      this.faceValue.push(0);
      this.faceValue.push(6);
    } else {
      this.faceValue.push(1);
      this.faceValue.push(2);
      this.faceValue.push(3);
      this.faceValue.push(4);
      this.faceValue.push(5);
      this.faceValue.push(6);
    }

    if(sharp) {
      this.wholepicpath = 'assets/image/dices/' + this.faceColor + '-' + this.dotColor + '-long.png';
    }
  }

  public build(scene: Scene, builder: DiceBuilder, name: string) {
    if(this.sharp){
      this.buildSharp(scene, builder, name);
    } else {
      this.buildRegular(scene, builder, name);
    }
  }

  private getColorfromtexture(texture: string): string {
    if(!texture) { return this.faceColor; }
    switch(texture){
      case 'wood':
        return 'Sienna';
      case 'marble':
        return 'WhiteSmoke';
      case 'blue':
        return 'blue';
      case 'red':
        return 'red';
      case 'green':
        return 'green';
      case 'teal':
       return 'cyan';
      case 'purple':
        return 'purple';
      case 'white':
        return 'white';
      case 'gray':
        return 'gray';
      case 'magenta':
        return 'magenta';
      case 'black':
        return 'black';
      default:
        return texture;
    }
  }

  public buildRegular(scene: Scene, builder: DiceBuilder, name: string ) {
    const dice = builder.createRegularDice(name, scene, this.xsize, this.ysize, this.zsize, this.picPath, this.edgeTexture, this.round);
    dice.physicsImpostor = new PhysicsImpostor(dice, PhysicsImpostor.BoxImpostor, { mass: 10, restitution: 0.7, friction: 0.1 }, scene);
    dice.physicsImpostor.setLinearVelocity( this.linearVelocity(2) );
    dice.physicsImpostor.setAngularVelocity( this.angularVelocity(2) );

    this.body = dice;
  }

  public buildSharp(scene: Scene, builder: DiceBuilder, name: string) {
    const dice = builder.createSharpDice(name, scene, this.xsize, this.ysize, this.zsize, this.wholepicpath);
    dice.physicsImpostor = new PhysicsImpostor(dice, PhysicsImpostor.BoxImpostor, { mass: 10, restitution: 0.7, friction: 0.1 }, scene);
    dice.physicsImpostor.setLinearVelocity( this.linearVelocity(2) );
    dice.physicsImpostor.setAngularVelocity( this.angularVelocity(2) );

    this.body = dice;
  }

  public dispose() {
    this.body.dispose();
  }

  private linearVelocity( level: number): Vector3 {
    switch( level ) {
      case 0:
        return new Vector3(this.randN(10,20)*this.randSign(), this.randN(5,15), this.randN(10,20)*this.randSign());
      case 1:
        return new Vector3(this.randN(20,30)*this.randSign(), this.randN(10,20), this.randN(20,30)*this.randSign());
      case 2:
        return new Vector3(this.randN(30,50)*this.randSign(), this.randN(15,25), this.randN(30,50)*this.randSign());
      case 3:
        return new Vector3(this.randN(40,60)*this.randSign(), this.randN(25,35), this.randN(40,60)*this.randSign());
      default:
        return new Vector3(this.randN(30,50)*this.randSign(), this.randN(15,25), this.randN(30,50)*this.randSign());
    }
  }

  private angularVelocity( level: number): Vector3 {
    switch( level ) {
      case 0:
        return new Vector3(this.randN(0,5)*this.randSign(), this.randN(5,10)*this.randSign(), this.randN(5,10)*this.randSign());
      case 1:
        return new Vector3(this.randN(3,7)*this.randSign(), this.randN(5,10)*this.randSign(), this.randN(5,10)*this.randSign());
      case 2:
        return new Vector3(this.randN(5,10)*this.randSign(), this.randN(5,10)*this.randSign(), this.randN(5,10)*this.randSign());
      case 3:
        return new Vector3(this.randN(10,20)*this.randSign(), this.randN(1,10)*this.randSign(), this.randN(5,10)*this.randSign());
      default:
        return new Vector3(this.randN(5,10)*this.randSign(), this.randN(5,10)*this.randSign(), this.randN(5,10)*this.randSign());
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
}
