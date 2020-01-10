import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-guess-array',
  templateUrl: './guess-array.component.html',
  styleUrls: ['./guess-array.component.scss'],

})
export class GuessArrayComponent implements OnInit {

  @Input() guessedLetter: string;
  @Input() underscoreArray: any;
  @Input() answer: any;


  constructor() {

   }
  ngOnInit() {

  }

}
