import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { createAotUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})

export class InfoBlockComponent implements OnInit, OnChanges {

  @Input() attemptsLeft: any | number ;
  @Input() wordLength: any | number;
  @Input() wrongGuessedLetters: string[];
  @Input() allAttempts: number;
  maxWidth = 150;
  coverWidth: string;
  constructor() {
    // this.coverWidth = '150px';
  }

  ngOnChanges() {

    if (this.attemptsLeft === this.allAttempts) {
      this.coverWidth = '150px';
      this.maxWidth = 150;
    }
    else {

      this.calculateCoverWidth();
      this.coverWidth = `${this.maxWidth}px`;
      console.log(this.coverWidth);
    }
  }

  ngOnInit() {
    if (!this.attemptsLeft && !this.wordLength) {
      this.attemptsLeft = '';
      this.wordLength = '';
      this.maxWidth = 150;
    }
  }

  calculateCoverWidth() {

    if (this.attemptsLeft === 0) {
      console.log('nulla vazze');
      this.maxWidth = 0;

      return;
    }
    if (this.allAttempts) {
      const unit = 150 / this.allAttempts;
      console.log(unit);
      this.maxWidth -= unit; // itt a hiba , Nan ad vissza
    }


  }


}
