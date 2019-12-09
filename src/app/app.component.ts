import { Component } from '@angular/core';
import { Dictionary } from 'src/app/components/taskword/dictionary';
import { TaskWord } from 'src/app/components/taskword/taskword';
import { AnswerCheck } from 'src/app/components/taskword/answercheck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hangman-app';
  guessedLetter: string;
  taskWord: TaskWord;
  underscoreArray: string[];
  attempts = 0;
  attemptLimit: number;
  taskWordLength: number;
  attemptsLeft: number;
  wrongGuesses = '';
  bodyPart: number;
  isStartedGame: boolean;

  constructor() {
    //this.makeWord();
    this.attempts = 0;
    this.attemptLimit = 11;

   }

  async makeWord() {
    const task = new Dictionary();
    const word = await task.makeTaskWord();
    console.log(word);
    this.taskWord = word;
    this.underscoreArray = word.underscoreArray;
    this.taskWordLength = this.taskWord.wordLetters.length;
    this.attemptsLeft = this.attemptLimit - this.attempts;

  }

  startGame() {
    console.log('elindul');
    this.makeWord();
    this.isStartedGame = true;
  }

handleGoodAnswer(word: TaskWord, guess: string) {
  word.transfromWord(guess);
  if (AnswerCheck.checkAnswer(word)) {
    console.log('győztél');
  }
}
handleWrongAnswer(guess: string) {
    console.log('rossz válasz');
    this.attempts ++;
    this.attemptsLeft--;
    this.bodyPart = this.attempts;
    this.wrongGuesses += `${guess.toLowerCase()},`;
    if (this.attempts === this.attemptLimit) {
      console.log('vesztettél');
    }

}

letterCheck() {
    AnswerCheck.checkLetter(this.guessedLetter, this.taskWord) ?
    this.handleGoodAnswer(this.taskWord, this.guessedLetter) :
    this.handleWrongAnswer(this.guessedLetter);
}

getClickedLetter(letter: string) {
  if (this.isStartedGame) {
    this.guessedLetter = letter;
    this.letterCheck();
  }

}
}

