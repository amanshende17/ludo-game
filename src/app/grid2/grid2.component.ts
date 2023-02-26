import { Component } from '@angular/core';
import {Player} from './player.model';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.css']
})
export class Grid2Component {

  // matrix: number[][] = [];

  // constructor() {
  //   for (let i = 1; i <= 8; i++) {
  //     let row: number[] = [];
  //     for (let j = 1; j <= 8; j++) {
  //       row.push(i * j);
  //     }
  //     this.matrix.push(row);
  //   }
  // }
Player1 = new Player(8,4,0,0,8,4);
Player2 = new Player(4,1,0,0,4,1);
Player3 = new Player(1,5,0,0,1,5);
Player4 = new Player(5,8,0,0,5,8);
gameStart(){
  
}

currDiv: string = " ";
ShowDiv(divVal: string) {
    this.currDiv = divVal;
}
rndInt : number = 0;
i : number = 1;
winner : String = " ";
path1: { x: number, y: number }[] = [
  { x:8,y:4},
  { x:7,y:4},
  { x:6,y:4},
  { x:5,y:4},
  { x:5,y:3},
  { x:5,y:2},
  { x:5,y:1},
  { x:4,y:1},
  { x:4,y:2},
  { x:4,y:3},
  { x:4,y:4},
  { x:3,y:4},
  { x:2,y:4},
  { x:1,y:4},
  { x:1,y:5},
  { x:2,y:5},
  { x:3,y:5},
  { x:4,y:5},
  { x:4,y:6},
  { x:4,y:7},
  { x:4,y:8},
  { x:5,y:8},
  { x:5,y:7},
  { x:5,y:6},
  { x:5,y:5},
  { x:6,y:5},
  { x:7,y:5},
  { x:8,y:5}
];
path2: { x: number, y: number }[] = [
  { x:4,y:1},
  { x:4,y:2},
  { x:4,y:3},
  { x:4,y:4},
  { x:3,y:4},
  { x:2,y:4},
  { x:1,y:4},
  { x:1,y:5},
  { x:2,y:5},
  { x:3,y:5},
  { x:4,y:5},
  { x:4,y:6},
  { x:4,y:7},
  { x:4,y:8},
  { x:5,y:8},
  { x:5,y:7},
  { x:5,y:6},
  { x:5,y:5},
  { x:6,y:5},
  { x:7,y:5},
  { x:8,y:5},
  { x:8,y:4},
  { x:7,y:4},
  { x:6,y:4},
  { x:5,y:4},
  { x:5,y:3},
  { x:5,y:2},
  { x:5,y:1}
];
path3: { x: number, y: number }[] = [
  { x:1,y:5},
  { x:2,y:5},
  { x:3,y:5},
  { x:4,y:5},
  { x:4,y:6},
  { x:4,y:7},
  { x:4,y:8},
  { x:5,y:8},
  { x:5,y:7},
  { x:5,y:6},
  { x:5,y:5},
  { x:6,y:5},
  { x:7,y:5},
  { x:8,y:5},
  { x:8,y:4},
  { x:7,y:4},
  { x:6,y:4},
  { x:5,y:4},
  { x:5,y:3},
  { x:5,y:2},
  { x:5,y:1},
  { x:4,y:1},
  { x:4,y:2},
  { x:4,y:3},
  { x:4,y:4},
  { x:3,y:4},
  { x:2,y:4},
  { x:1,y:4},
];
path4: { x: number, y: number }[] = [
  { x:5,y:8},
  { x:5,y:7},
  { x:5,y:6},
  { x:5,y:5},
  { x:6,y:5},
  { x:7,y:5},
  { x:8,y:5},
  { x:8,y:4},
  { x:7,y:4},
  { x:6,y:4},
  { x:5,y:4},
  { x:5,y:3},
  { x:5,y:2},
  { x:5,y:1},
  { x:4,y:1},
  { x:4,y:2},
  { x:4,y:3},
  { x:4,y:4},
  { x:3,y:4},
  { x:2,y:4},
  { x:1,y:4},
  { x:1,y:5},
  { x:2,y:5},
  { x:3,y:5},
  { x:4,y:5},
  { x:4,y:6},
  { x:4,y:7},
  { x:4,y:8}
];

diceVal(){
  this.rndInt = Math.floor(6 * Math.random());
  if(this.i==1){
    this.Player1.count += this.rndInt;
    this.Player1.pos = this.Player1.pos + this.rndInt;
    if(this.Player1.pos <= 28){
    this.Player1.currRow = this.path1[this.Player1.pos].x;
    this.Player1.currCol = this.path1[this.Player1.pos].y;
    }
    else{
      this.Player1.currRow = this.path1[0].x;
      this.Player1.currCol = this.path1[0].y;
    }
    if(this.Player1.count >= 28){
     this.winner = "PLAYER GREEN WINS";
    }
    this.i=2;
  }
  else if(this.i==2){
    this.Player2.count += this.rndInt;
    this.Player2.pos = this.Player2.pos + this.rndInt;
    if(this.Player2.pos <= 28){
      this.Player2.currRow = this.path2[this.Player1.pos].x;
      this.Player2.currCol = this.path2[this.Player1.pos].y;
      }
      else{
        this.Player2.currRow = this.path2[0].x;
        this.Player2.currCol = this.path2[0].y;
      }
    if(this.Player2.count >= 28){
      this.winner = "PLAYER RED WINS";
     }
    this.i=3;
  }
  else if(this.i==3){
    this.Player3.count += this.rndInt;
    this.Player3.pos = this.Player3.pos + this.rndInt;
    if(this.Player3.pos <= 28){
      this.Player3.currRow = this.path3[this.Player3.pos].x;
      this.Player3.currCol = this.path3[this.Player3.pos].y;
      }
      else{
        this.Player3.currRow = this.path3[0].x;
        this.Player3.currCol = this.path3[0].y;
      }
    if(this.Player3.count >= 28){
      this.winner = "PLAYER BLUE WINS";
     }
    this.i=4;
  }
  else if(this.i==4){
    this.Player4.count += this.rndInt;
    this.Player4.pos = this.Player4.pos + this.rndInt;
    if(this.Player4.pos <= 28){
      this.Player4.currRow = this.path4[this.Player4.pos].x;
      this.Player4.currCol = this.path4[this.Player4.pos].y;
      }
      else{
        this.Player4.currRow = this.path4[0].x;
        this.Player4.currCol = this.path4[0].y;
      }
    if(this.Player4.count >= 28){
      this.winner = "PLAYER YELLOW WINS";
     }
    this.i=1;
  }
}
}
