import { Component,
  OnInit, ElementRef,
  ViewChild,
  Input,
  SimpleChanges,
  OnChanges,
  AfterViewInit } from '@angular/core';

interface HangmanDraw {
  start: Point;
  end: Point;
  lineWidth: number;
}

interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'app-draw-hangman',
  templateUrl: './draw-hangman.component.html',
  styleUrls: ['./draw-hangman.component.scss'],

})


export class DrawHangmanComponent implements OnInit, OnChanges, AfterViewInit  {

  @Input() drawPart: number;
  @Input() isStarted: boolean;
  @Input() isLastPart: boolean;
  @Input() readyToClearCanvas: boolean;


  @ViewChild('hangmanCanvas', {static: false})
  hangmanCanvas: ElementRef;
  canvasDrawer: CanvasRenderingContext2D;
  bottomLine: HangmanDraw;
  mainLine: HangmanDraw;
  horizontalLine: HangmanDraw;
  diagonalLine: HangmanDraw;
  rope: HangmanDraw;
  head: number[];
  body: HangmanDraw;
  leftFoot: HangmanDraw;
  rightFoot: HangmanDraw;
  leftArm: HangmanDraw;
  rightArm: HangmanDraw;
  leftEye: number[];
  rightEye: number[];
  mouth: HangmanDraw;
  coordinates: HangmanDraw[] | object;

  ngOnChanges(change: SimpleChanges) {
    this.checkBeforeDraw();
  }


  constructor() {
    this.isStarted = false;
    this.coordinates = [

    this.bottomLine = {start: {x: 10, y: 280},
    end: {x: 80, y: 280},
    lineWidth: 10},

    this.mainLine = {start: {x: 45, y: 280},
    end: {x: 45, y: 50},
    lineWidth: 10},

    this.horizontalLine = {start: {x: 40, y: 50},
    end: {x: 150, y: 50},
    lineWidth: 10},

    this.diagonalLine = {start: {x: 45, y: 90},
    end: {x: 75, y: 50},
    lineWidth: 10},

    this.rope = {start: {x: 145, y: 50},
    end: {x: 145, y: 90},
    lineWidth: 10},

    this.head = [145, 114, 25],

    this.body = {start: {x: 145, y: 140},
    end: {x: 145, y: 220},
    lineWidth: 5},

    this.leftFoot = {start: {x: 146, y: 220},
    end: {x: 125, y: 260},
    lineWidth: 5},

    this.rightFoot = {start: {x: 146, y: 220},
    end: {x: 165, y: 260},
    lineWidth: 5},

    this.leftArm = {start: {x: 145, y: 170},
    end: {x: 115, y: 200},
    lineWidth: 5},

    this.rightArm = {start: {x: 145, y: 170},
    end: {x: 175, y: 200},
    lineWidth: 5},

    this.leftEye = [135, 110, 5],

    this.rightEye = [155, 110, 5],

    this.mouth = {start: {x: 135, y: 127},
    end: {x: 155, y: 127},
    lineWidth: 3}
    ];
}

ngOnInit() {

}

ngAfterViewInit(): void {
  this.canvasDrawer = (this.hangmanCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
}

checkBeforeDraw() {
  if (this.readyToClearCanvas) {
    this.clearCanvas();
    this.readyToClearCanvas = false;
  }
  if (this.isLastPart) {

    this.drawHangMan(this.drawPart - 1);
    this.isLastPart = false;
    this.isStarted = false;
  }

  if (this.drawPart > 0 && this.isStarted) {

    this.drawHangMan(this.drawPart - 1);
  }
}

clearCanvas() {
    this.canvasDrawer.clearRect(0, 0, 300, 300);
 }

drawHangMan(drawpart: number) {

  if (Array.isArray(this.coordinates[drawpart])) {
    this.drawCircle(this.coordinates[drawpart], 5);
  } else {this.drawLine(this.coordinates[drawpart]);
    }
}

drawLine(coordinates: HangmanDraw) {
  this.canvasDrawer.beginPath();
  this.canvasDrawer.lineWidth = coordinates.lineWidth;
  this.canvasDrawer.moveTo(coordinates.start.x, coordinates.start.y);
  this.canvasDrawer.lineTo(coordinates.end.x, coordinates.end.y);
  this.canvasDrawer.stroke();
  this.canvasDrawer.closePath();
}

drawCircle(coordinates: number[], linewidth: number) {
  this.canvasDrawer.beginPath();
  this.canvasDrawer.lineWidth = linewidth;
  this.canvasDrawer.arc(coordinates[0], coordinates[1], coordinates[2], 0, 2 * Math.PI);
  this.canvasDrawer.stroke();
  this.canvasDrawer.closePath();
}
}
