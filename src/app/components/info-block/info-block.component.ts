import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})

export class InfoBlockComponent implements OnInit {

  @Input() attemptsLeft: any | number ;
  @Input() wordLength: any | number;
  @Input() wrongGuessedLetters: string[];

  constructor() { }

  ngOnInit() {
    if (!this.attemptsLeft && !this.wordLength) {
      this.attemptsLeft = '';
      this.wordLength = '';
    }
  }

}
