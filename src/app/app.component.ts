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
  isLastPart: boolean;
  clearCanvas: boolean;
  isWin = false;
  isLost = false;

  constructor() {

    this.attempts = 0;
   }

  async makeWord() {
    const task = new Dictionary();
    const word = await task.makeTaskWord();
    console.log(word);
    this.taskWord = word;
    this.underscoreArray = word.underscoreArray;
    this.attemptLimit = this.taskWord.strength;
    this.taskWordLength = this.taskWord.wordLetters.length;
    this.attemptsLeft = this.attemptLimit - this.attempts;

  }

  startGame() {
    this.prepareNewGame();
    this.makeWord();
  }

handleGoodAnswer(word: TaskWord, guess: string) {
  word.transfromWord(guess);
  if (AnswerCheck.checkAnswer(word)) {
    console.log('győztél');

    this.isStartedGame = false;
    this.isWin = true;
  }
}
handleWrongAnswer(guess: string) {

    this.attempts ++;
    this.attemptsLeft--;
    this.bodyPart = this.attempts;
    this.wrongGuesses += `${guess.toLowerCase()},`;
    this.clearCanvas = false;

    if (this.attempts === this.attemptLimit) {
      this.isLost = true;
      this.isLastPart = true;
      this.isStartedGame = false;

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

prepareNewGame() {
  this.isWin = false;
  this.isLost = false;
  this.bodyPart = 0;
  this.clearCanvas = true;
  this.isStartedGame = true;
  this.attempts = 0;
  this.attemptLimit = 11;
  this.taskWordLength = 0;
  this.wrongGuesses = '';
  this.isLastPart = false;
}

}

