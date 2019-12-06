import {TaskWord} from './taskword';

export class AnswerCheck {

    static checkAnswer(taskWord: TaskWord) {
        const currentState = taskWord.makeStringFromArray(taskWord.underscoreArray);
        return (taskWord.word === currentState);
    }

   static checkLetter(letter: string, taskWord: TaskWord) {
     return taskWord.wordLetters.includes(letter.toLowerCase());
    }
   }
