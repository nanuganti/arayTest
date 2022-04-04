const matchingScore = require("./intersectionArray");
class WordMatching {
    constructor(firstWord, secondWord) {
        this.firstWord = firstWord;
        this.secondWord = secondWord;
    }

    getMatchingScore() {
        return matchingScore(this.firstWord, this.secondWord);
    }
}

module.exports = WordMatching;