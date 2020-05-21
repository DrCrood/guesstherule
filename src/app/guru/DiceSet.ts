import {OnInit} from '@angular/core'; 
import { DiceType } from './DiceType';

export class DiceSet implements OnInit {
  public used: boolean;
  public ruleID = 0;
  private DiceList: DiceType[];

  public constructor(ruleId: number, ...diceType: DiceType[] ) {
    this.DiceList = new Array<DiceType>();
    for( const dice of diceType) {
      this.DiceList.push(dice);
    }
    this.ruleID = ruleId;
    this.used = false;
  }

  public ngOnInit(){
  }

  public getDices() {
    return this.DiceList;
  }

}
