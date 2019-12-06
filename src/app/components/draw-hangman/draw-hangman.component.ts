import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-hangman',
  templateUrl: './draw-hangman.component.html',
  styleUrls: ['./draw-hangman.component.scss']
})
export class DrawHangmanComponent implements OnInit {
  canvas: any;
  canvasDrawer: any;

  constructor() {

    //this.canvasParent = document.getElementById('hangman');
    //this.resetCanvas();

    this.canvas = document.getElementById('hangmancanvas');
    this.canvasDrawer = this.canvas.getContext('2d');
    //this.clearCanvas();

}


clearCanvas() {

    this.canvasDrawer.clearRect(0, 0, 300, 300);
}

/* resetCanvas() {
    this.canvasParent.innerHTML='';
} */

drawHangMan(drawparts) {

  // úgy kell majd módosítani ezt, hogy csak a kordinátákat módosítsa, és egy rajz függvény legyen,
  // és külön objektumokban pedig a koordináták minden egyes rajz részlethez; ezzel le lehet rövidíteni keményen :D

    // let drawList = [this.drawBottom, this.drawMainLine, this.drawHorizontalLine, this.drawDiagonalLine,
    //     this.drawRope, this.drawHead, this.drawBody, this.drawLeftFoot, this.drawRightFoot,
    //     this.drawLeftArm, this.drawRightArm, this.drawLeftEye, this.drawRightEye, this.drawMouth];

    // drawList[drawparts - 1].call(this.canvasDrawer);



}

// drawBottom() {

//   this.canvasDrawer.lineWidth = 10;
//   this.canvasDrawer.moveTo(10, 280);
//   this.canvasDrawer.lineTo(80, 280);
//   this.canvasDrawer.stroke();
// }

// drawMainLine() {
   
//   this.canvasDrawer.lineWidth = 10;
//   this.canvasDrawer.moveTo(45, 280);
//   this.canvasDrawer.lineTo(45, 50);
//   this.canvasDrawer.stroke();
// }

// drawHorizontalLine() {
    
//   this.canvasDrawer.lineWidth = 10;
//   this.canvasDrawer.moveTo(40, 50);
//   this.canvasDrawer.lineTo(150, 50);
//   this.canvasDrawer.stroke();
// }

// drawDiagonalLine() {
   
//   this.canvasDrawer.lineWidth = 10;
//   this.canvasDrawer.moveTo(45, 90);
//   this.canvasDrawer.lineTo(75, 50);
//   this.canvasDrawer.stroke();
// }

// drawRope() {

//   this.canvasDrawer.lineWidth = 10;
//   this.canvasDrawer.moveTo(145, 50);
//   this.canvasDrawer.lineTo(145, 90);
//   this.canvasDrawer.stroke();
// }

// drawHead() {
    
//     this.lineWidth=5;
//     this.beginPath();
//     this.arc(145,114,25,0,2*Math.PI)
//     this.stroke();
// }

// drawBody() {
  
//     this.lineWidth=5;
//     this.moveTo(145,140);
//     this.lineTo(145,220);
//     this.stroke(); 
// }


// drawLeftFoot() {
   
//     this.lineWidth=5;
//     this.moveTo(146,220);
//     this.lineTo(125,260);
//     this.stroke(); 
// }


// drawRightFoot() {
   
//     this.lineWidth=5;
//     this.moveTo(146,220);
//     this.lineTo(165,260);
//     this.stroke(); 
// }

// drawLeftArm() {
   
//     this.lineWidth=5;
//     this.moveTo(145,170);
//     this.lineTo(115,200);
//     this.stroke(); 
// }

// drawRightArm() {
   
//     this.lineWidth=5;
//     this.moveTo(145,170);
//     this.lineTo(175,200);
//     this.stroke(); 
// }

// drawLeftEye() {
    
//     this.lineWidth=3;
//     this.beginPath();
//     this.arc(135,110,5,0,2*Math.PI)
//     this.stroke();
// }

// drawRightEye() {
   
//     this.lineWidth=3;
//     this.beginPath();
//     this.arc(155,110,5,0,2*Math.PI)
//     this.stroke();
// }

// drawMouth() {
    
//     this.lineWidth=3;
//     this.moveTo(135,127);
//     this.lineTo(155,127);
//     this.stroke(); 
// }

   ngOnInit() {
  }

}
