import {TaskWord} from 'src/app/components/taskword/taskword';

export class Dictionary {
    words: any[];
    constructor() {
        this.words = [];

    }


    async makeDictonary() {
        const fileUrl = 'assets/words.txt';
        return fetch(fileUrl).then(r => r.text()).then(t => {
            const rawDict = t.split('\n');
            rawDict.forEach(item => {
                if (item.length > 9) {
                    this.words.push(item);
                }
            });
        });
    }


   async makeTaskWord() {
        let taskWord;
        return await this.makeDictonary().then(t => {
            taskWord = new TaskWord(this.randomWord().trim());
            return taskWord;
        });
    }

    randomWord() {
        const randWord = Math.floor((Math.random() * this.words.length));
        return this.words[randWord];
    }
}
