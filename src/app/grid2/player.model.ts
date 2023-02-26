
export class Player{
    start_row: number = 0;
    start_col: number = 0;
    count: number = 0;
    pos: number = 0;
    currRow: number = 0;
    currCol: number = 0;

    constructor(start_row:number,start_col:number,count:number,pos:number,currRow:number,currCol:number) {
        this.start_row = start_row;
        this.start_col = start_col;
        this.count = count;
        this.pos = pos;
        this.currRow=currRow;
        this.currCol=currCol;
    }
}