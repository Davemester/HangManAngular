export class TaskWord {
    word: string;
    wordLetters: any;
    underscoreArray: any[];
    strength: number;

    constructor(word: string) {
        this.word = word;
        this.splitWordtoLetters();
        this.underscoreArray = this.makeEmptyLettersArray();
        this.calculateStrength();
    }
    private splitWordtoLetters() {
        this.wordLetters = this.word.split('');
        return this.wordLetters;
    }
    private  makeEmptyLettersArray(): string[] {
        const letterArray = [];
        this.wordLetters.forEach(() => {
            letterArray.push('_');
        });
        return letterArray;
    }
    public makeStringFromArray(array: string[]) {
        let result = '';
        array.forEach((item: string)  => {
            if (item !== '_') {
                result += item;
            }
        });
        return result;
    }
    public transfromWord(letter: string) {
        this.wordLetters.forEach((item: string, position: number) => {
            if (item === letter.toLowerCase()) {
                this.transformUnderScore(item, position);
            }
        });
    }

    public  transformUnderScore(letter: string, pos: number) {
        this.underscoreArray.splice(pos, 1, letter);
    }

    private  calculateStrength() {
        if (this.wordLetters.length < 12) {
            this.strength = 11;
        }
        if (this.wordLetters.length < 14 && this.wordLetters.length > 11) {
            this.strength = 13;
        }
        if (this.strength >= 14) {
            this.strength = 15;
        }
    }
}
