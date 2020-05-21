import {MeshBuilder, VertexData, SubMesh } from '@babylonjs/core/';
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial';
import { MultiMaterial } from '@babylonjs/core/Materials/multiMaterial';
import {Scene} from '@babylonjs/core/scene';
import {Vector3, Vector4, Color3} from '@babylonjs/core/Maths/math';
import {Mesh} from '@babylonjs/core/Meshes/mesh';
import {WoodProceduralTexture, MarbleProceduralTexture} from '@babylonjs/procedural-textures';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';

export class DiceBuilder {
  private picPath = [];

  public constructor() {}

  public createRegularDice(name: string, scene: Scene, xscale: number, yscale: number, zscale: number,
                           picPath: string[], edge: string, round: boolean ): Mesh {

    let edgeTexture = null;
    let edgeColor = null;
    switch( edge ) {
      case 'wood':
        edgeTexture = new WoodProceduralTexture('wood', 1024, scene);
        break;
      case 'marble':
        edgeTexture = new MarbleProceduralTexture('marble', 1024, scene);
        break;
      case 'blue':
        edgeColor = Color3.Blue();
        break;
      case 'red':
        edgeColor = Color3.Red();
        break;
      case 'green':
        edgeColor = Color3.Green();
        break;
      case 'teal':
        edgeColor = Color3.Teal();
        break;
      case 'purple':
        edgeColor = Color3.Purple();
        break;
      case 'white':
        edgeColor = Color3.White();
        break;
      case 'gray':
        edgeColor = Color3.Gray();
        break;
      case 'magenta':
        edgeColor = Color3.Magenta();
        break;
      case 'black':
        edgeColor = Color3.Black();
        break;
      default:
        edgeColor = Color3.White();
        break;
    }

    const edgemat = new StandardMaterial('mat', scene);
    if(edgeTexture){
      edgemat.diffuseTexture = edgeTexture;
    } else {
      edgemat.diffuseColor = edgeColor;
    }
    edgemat.backFaceCulling = true;

    const mat1 = new StandardMaterial('mat1', scene);
    mat1.diffuseTexture = new Texture( picPath[0], scene);
    mat1.backFaceCulling = false;

    const mat2 = new StandardMaterial('mat2', scene);
    mat2.diffuseTexture = new Texture( picPath[1], scene);
    mat2.backFaceCulling = false;

    const mat3 = new StandardMaterial('mat3', scene);
    mat3.diffuseTexture = new Texture( picPath[2], scene);
    mat3.backFaceCulling = false;

    const mat4 = new StandardMaterial('mat4', scene);
    mat4.diffuseTexture = new Texture( picPath[3], scene);
    mat4.backFaceCulling = false;

    const mat5 = new StandardMaterial('mat5', scene);
    mat5.diffuseTexture = new Texture( picPath[4], scene);
    mat5.backFaceCulling = false;

    const mat6 = new StandardMaterial('mat6', scene);
    mat6.diffuseTexture = new Texture( picPath[5], scene);
    mat6.backFaceCulling = false;

    const regdicemat = new MultiMaterial('regrednumdice', scene);
    regdicemat.subMaterials.push(mat1);
    regdicemat.subMaterials.push(mat6);
    regdicemat.subMaterials.push(mat2);
    regdicemat.subMaterials.push(mat3);
    regdicemat.subMaterials.push(mat4);
    regdicemat.subMaterials.push(mat5);
    regdicemat.subMaterials.push(edgemat);

    const verticeSegmnt = [];
    const positions = [];
    const normals = [];
    let cn = 0.15;
    if(round) { cn = 0.33; }
    const RegNumDice = this.createMesh_round(name, cn, xscale, yscale, zscale, scene, verticeSegmnt);
    RegNumDice.subMeshes = [];
    const totalVertices = RegNumDice.getTotalVertices();
    const index = [];
    let Index = 0;
    for(let m=0; m<verticeSegmnt.length; m++) {
      Index += verticeSegmnt[m];
      index[m] = Index;
    }
    RegNumDice.subMeshes.push(new SubMesh(0,0,totalVertices, 0, verticeSegmnt[0], RegNumDice));
    RegNumDice.subMeshes.push(new SubMesh(1,0,totalVertices, index[0], verticeSegmnt[1], RegNumDice));
    RegNumDice.subMeshes.push(new SubMesh(2,0,totalVertices, index[1], verticeSegmnt[2], RegNumDice));
    RegNumDice.subMeshes.push(new SubMesh(3,0,totalVertices, index[2], verticeSegmnt[3], RegNumDice));
    RegNumDice.subMeshes.push(new SubMesh(4,0,totalVertices, index[3], verticeSegmnt[4], RegNumDice));
    RegNumDice.subMeshes.push(new SubMesh(5,0,totalVertices, index[4], verticeSegmnt[5], RegNumDice));
    RegNumDice.subMeshes.push(new SubMesh(6,0,totalVertices, index[5], verticeSegmnt[6], RegNumDice));

    RegNumDice.material = regdicemat;
    RegNumDice.position = new Vector3(Math.random()*10 -3, Math.random()*5 + 10, Math.random() * 6 - 3 );
    RegNumDice.updateFacetData();
    return RegNumDice;
  }

  public createSharpDice(name: string, scene: Scene, xscale: number, yscale: number, zscale: number,
                         picPath: string ): Mesh {

    const mat1 = new StandardMaterial('mat1', scene);
    mat1.diffuseTexture = new Texture( picPath, scene);
    mat1.backFaceCulling = false;

    const faceUV = new Array(6);
    for (let i = 0; i < 6; i++) {
        faceUV[i] = new Vector4(i / 6, 0, (i + 1) / 6, 1);
    }
    const options = {
      width: xscale*1.8,
      height: yscale*1.8,
      depth: zscale*1.8,
      faceUV,
    };
    const SharpDice = MeshBuilder.CreateBox(name, options, scene);
    SharpDice.material = mat1;

    SharpDice.position = new Vector3(Math.random()*10 -3, Math.random()*5 + 10, Math.random() * 6 - 3 );
    SharpDice.updateFacetData();
    return SharpDice;
  }



  private sampleMesh( phi: number,  beta: number,  cn: number, scaleX: number,  scaleY: number,  scaleZ: number) {
    const cosPhi = Math.cos(phi);
    const cosBeta =  Math.cos(beta);
    const sinPhi = Math.sin(phi);
    const sinBeta = Math.sin(beta);
    const vertex = new Vector3();
    vertex.x = scaleX * Math.sign(cosPhi) * Math.pow(Math.abs(cosPhi), cn) * Math.sign(cosBeta) * Math.pow(Math.abs(cosBeta), cn);
    vertex.y = scaleY * Math.sign(cosPhi) * Math.pow(Math.abs(cosPhi), cn) *  Math.sign(sinBeta) * Math.pow(Math.abs(sinBeta), cn);
    vertex.z = scaleZ * Math.sign(sinPhi) * Math.pow(Math.abs(sinPhi), cn);
    return vertex;
  }

  private calculateNormal( phi: number,  beta: number,  cn: number, scaleX: number, scaleY: number, scaleZ: number) {
    const normal = new Vector3();
    const cosPhi = Math.cos(phi);
    const cosBeta =  Math.cos(beta);
    const sinPhi = Math.sin(phi);
    const sinBeta = Math.sin(beta);
    normal.x = Math.sign(cosPhi) * Math.pow(Math.abs(cosPhi), 2 - cn) * Math.sign(cosBeta) * Math.pow(Math.abs(cosBeta), 2 - cn) / scaleX;
    normal.y = Math.sign(cosPhi) * Math.pow(Math.abs(cosPhi), 2 - cn) * Math.sign(sinBeta) * Math.pow(Math.abs(sinBeta), 2 - cn) / scaleY;
    normal.z = Math.sign(sinPhi) * Math.pow(Math.abs(sinPhi), 2 - cn) / scaleZ;
    // normal=normal.normalize();
    normal.normalize();
    return normal;
  }

  private createMesh_round( name: string, cn: number, scalex: number, scaley: number, scalez: number, scene: Scene, vertexSeg: number[] ) {
    const mesh = new Mesh(name, scene);
    let phi = 0.0;
    let beta = 0.0;
    const samples = 48;
    const dB = Math.PI * 2.0 / samples;
    const dP = Math.PI * 2.0 / samples;
    phi = -Math.PI/2;
    const vertices = [];
    const normals = [];
    const verticesFaces = new Array(7);
    const normalsFaces = new Array(7);
    for(let i=0; i<7; i++) {
      verticesFaces[i] = [];
      normalsFaces[i] = [];
    }
    let onFace = false;
    let  m = 0;
    for(let n = 0; n < 1; n++) {
      for (let j = 0; j <= samples / 2; j++) {
        beta = -Math.PI/2;
        for (let i = 0; i <= samples; i++) {
          beta += dB;
          onFace = false;
          if((beta > 1.4 && beta < 1.6 && phi < 0.01 && phi > -0.2)) {
            onFace = true; // top
            m = 0;
          }

          if((beta > 4.5 && beta < 4.8 && phi < 0.1 && phi > -0.2 )) {
             onFace = true;  // bottom
             m = 1;
            }

          if((beta > -1.44 && beta < 4.9 && phi > 1.43 && phi < 1.59 )) {
              onFace = true;
              m = 2;         // font
             }
          if((beta > -2 && beta < 5 && phi > -1.6 && phi < -1.5 )) {
              onFace = true;
              m = 3;        // back
             }
          if((beta > 3.0 && beta < 3.2 && phi > -0.2 && phi < 0.01)) {
             onFace = true;   // right
             m = 4;
            }
          if((beta > -0.2 && beta < 0.01 && phi > -0.2 && phi < 0.1 )) {
              onFace = true;
              m = 5;        // left
             }

          if(!onFace) {
            m = 6;
            // console.log('m='+m+ ' beta='+beta+' phi='+phi);
            // continue;
           }
  
          // Triangle #1
          verticesFaces[m].push(this.sampleMesh(phi, beta, cn, scalex, scaley, scalez));
          verticesFaces[m].push(this.sampleMesh(phi + dP, beta, cn, scalex, scaley, scalez));
          verticesFaces[m].push(this.sampleMesh(phi + dP, beta + dB, cn, scalex, scaley, scalez));
  
          normalsFaces[m].push(this.calculateNormal(phi, beta, cn, scalex, scaley, scalez));
          normalsFaces[m].push(this.calculateNormal(phi + dP, beta, cn, scalex, scaley, scalez));
          normalsFaces[m].push(this.calculateNormal(phi + dP, beta + dB, cn, scalex, scaley, scalez));
  
          verticesFaces[m].push(this.sampleMesh(phi, beta, cn, scalex, scaley, scalez));
          verticesFaces[m].push(this.sampleMesh(phi + dP, beta + dB, cn, scalex, scaley, scalez));
          verticesFaces[m].push(this.sampleMesh(phi, beta + dB, cn, scalex, scaley, scalez));
  
          normalsFaces[m].push(this.calculateNormal(phi, beta, cn, scalex, scaley, scalez));
          normalsFaces[m].push(this.calculateNormal(phi + dP, beta + dB, cn, scalex, scaley, scalez));
          normalsFaces[m].push(this.calculateNormal(phi, beta + dB, cn, scalex, scaley, scalez));
        }
        phi += dP;
      }
    }

    let L = 0;
    let xmin = 0;
    let xmax = 0;
    let ymin = 0;
    let ymax = 0;
    let zmin = 0;
    let zmax = 0;
    const Ranges = [];
    const Xmaxes = [];
    const Ymaxes = [];
    const Zmaxes = [];

    // vertices order in the array: top-bottom-font-back-right-left
    for(let k=0; k<7; k++){
      L = verticesFaces[k].length;
      vertexSeg.push(L);
      xmin = 0;
      xmax = 0;
      ymin = 0;
      ymax = 0;
      zmin = 0;
      zmax = 0;
      for(let l = 0; l < L; l++) {
        vertices.push(verticesFaces[k][l]);
        if(verticesFaces[k][l].x < xmin ) { xmin = verticesFaces[k][l].x; }
        if(verticesFaces[k][l].x > xmax ) { xmax = verticesFaces[k][l].x; }
        if(verticesFaces[k][l].y < ymin ) { ymin = verticesFaces[k][l].y; }
        if(verticesFaces[k][l].y > ymax ) { ymax = verticesFaces[k][l].y; }
        if(verticesFaces[k][l].z < zmin ) { zmin = verticesFaces[k][l].z; }
        if(verticesFaces[k][l].z > zmax ) { zmax = verticesFaces[k][l].z; }
      }
      Ranges.push( new Vector3(xmax - xmin, ymax - ymin, zmax - zmin) );
      Xmaxes.push( xmax );
      Ymaxes.push( ymax );
      Zmaxes.push( zmax );
    }

    L = 0;
    const index = [];
    for(let k=0; k<7; k++){
      index.push(L);
      L += verticesFaces[k].length;
    }

    for(let k=0; k<7; k++){
      let L = normalsFaces[k].length;
      for(let l = 0; l < L; l++) {
        normals.push(normalsFaces[k][l]);
        // console.log('k= ' + k + ' l= ' + l + ': ' + normalsFaces[k][l] )
      }
    }

    const shapeReturned = new VertexData();
    shapeReturned.positions = [];
    shapeReturned.normals = [];
    shapeReturned.indices = [];
    shapeReturned.uvs = [];

    let indice = 0;
    let k = 0;
    for (let i = 0; i < vertices.length; i++) {
      shapeReturned.indices.push(indice++);
      shapeReturned.positions.push(vertices[i].x);
      shapeReturned.positions.push(vertices[i].y);
      shapeReturned.positions.push(vertices[i].z);
      shapeReturned.normals.push(normals[i].x);
      shapeReturned.normals.push(normals[i].y);
      shapeReturned.normals.push(normals[i].z);
      if(k === 0 || k === 1){
        shapeReturned.uvs.push((Xmaxes[k] - vertices[i].x)/Ranges[k].x, (Zmaxes[k] - vertices[i].z)/Ranges[k].z);
      }
      if(k === 2 || k === 3 ){
        shapeReturned.uvs.push((Xmaxes[k]- vertices[i].x)/Ranges[k].x, (Ymaxes[k] - vertices[i].y)/Ranges[k].y);
      }
      if(k === 4 || k === 5 ){
        shapeReturned.uvs.push((Ymaxes[k] - vertices[i].y)/Ranges[k].y, (Zmaxes[k] - vertices[i].z)/Ranges[k].z);
      }
      if(k > 5 ){
        shapeReturned.uvs.push((vertices[i].y - vertices[index[k]].y)/3, (vertices[i].z - vertices[index[k]].z)/3);
      }
      if(i === index[k+1] - 1){ k++; }
    }
    shapeReturned.applyToMesh(mesh);
    return mesh;
  }

}
