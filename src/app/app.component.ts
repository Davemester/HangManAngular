import { Component, SimpleChanges } from '@angular/core';
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
  attempts: number;
  attemptLimit: number;
  taskWordLength: number;
  attemptsLeft: number;
  wrongGuesses = '';

  constructor() {
    this.makeWord();
    this.attempts = 0;
    this.attemptLimit = 11;
    // this.hangman = new Hangman();
   }


  async makeWord() {
    const task = new Dictionary();
    const word = await task.makeTaskWord();
    console.log(word);
    this.taskWord = word;
    this.underscoreArray = word.underscoreArray;
    this.taskWordLength = this.taskWord.wordLetters.length;
    this.attemptsLeft = this.attemptLimit - this.attempts;
    console.log(this.taskWordLength, this.attemptsLeft);
  }

handleGoodAnswer(word: TaskWord, guess: string) {
  word.transfromWord(guess);
  if (AnswerCheck.checkAnswer(word)) {
    console.log('győztél');
  }
}
handleWrongAnswer(guess: string) {
    console.log('rossz válasz');
    this.attempts++;
    this.attemptsLeft--;
    this.wrongGuesses += `${guess.toLowerCase()},`;
    if (this.attempts === this.attemptLimit) {
      console.log('vesztettél');
    }
  // this.guessArray.addToGuessArray(guess.value);
  // Display.showWrongAttempt();
  // Display.showGuessedLetters(this.guessArray.guessArray);
  // Display.showAttemptsLeft(this.attemptLimit-this.attempts)
  // this.hangman.drawHangMan(this.attempts);
  // Display.clearInputField(guess);
}

letterCheck() {
    AnswerCheck.checkLetter(this.guessedLetter, this.taskWord) ?
    this.handleGoodAnswer(this.taskWord, this.guessedLetter) :
    this.handleWrongAnswer(this.guessedLetter);
}

getClickedLetter(letter: string) {
  console.log(letter);
  this.guessedLetter = letter;
  this.letterCheck();
}
}

