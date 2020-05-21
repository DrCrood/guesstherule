import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  Level: number;
  Tries: number;
  Won: boolean;
  Tests: number;
  Type: number;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  title = 'game';
  Greetings = ['Good job!', 'Great thinking', 'Wonderful!', 'Good reasoning', 'Amazing work!', 'Excellent!', 'Great job!'];
  greeting: string;
  constructor(
    private  dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    switch(this.data.Type) {
      case 1:
        this.title = 'Good work! Give another try!';  // game over
        break;
      case 5:
        this.title = 'Great work!';  // msg dislog
        this.greeting = this.Greetings[Math.floor(Math.random()*7)]
        break;
      case 9:
        this.title = 'Congratulations!';  // game won
        break;
      default:
        this.title = 'Good job!';
    }
  }
 }