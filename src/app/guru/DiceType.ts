import {OnInit} from '@angular/core'; 

export class DiceType implements OnInit {

  public Name: string;
  public Face: string;
  public Dot: string;
  public Edge: string;
  public Round: boolean;
  public Sharp: boolean;
  public Long: boolean;
  public NullFace: boolean;
  public constructor(name: string, face: string, dot: string, edge: string,
                     round: boolean, sharp: boolean, long: boolean, nullface: boolean ) {
    this.Name = name;
    this.Face = face;
    this.Dot = dot;
    this.Edge = edge;
    this.Round = round;
    this.Sharp = sharp;
    this.Long = long;
    this.NullFace = nullface;
  }

  public ngOnInit(){
  }

}
