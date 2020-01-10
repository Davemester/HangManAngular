import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-letter-tiles',
  templateUrl: './letter-tiles.component.html',
  styleUrls: ['./letter-tiles.component.scss']
})
export class LetterTilesComponent implements OnInit {

  letterTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
   'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  targetLetter = '';
   @Output() clickedLetterEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  getGuessedLetter(target: string) {
    this.targetLetter = target;
    this.sendLetter();
  }


  sendLetter() {
    this.clickedLetterEvent.emit(this.targetLetter);

  }
}
