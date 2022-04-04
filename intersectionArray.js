const getCommonElements = (firstArray, secondArray) => {

    let intersectionArray = [];

    for (let index = 0; index < firstArray.length; index++) {
        const element = firstArray[index];
        if (secondArray.includes(element)) {
            intersectionArray.push(element);
        }
    }
    return intersectionArray;
}

const matchingScore = (firstWord, secondWord) => {
    const count = firstWord.length;
    const matchedArray = getCommonElements(firstWord, secondWord);

    if (matchedArray.length === count) {
        return 1;
    } else if (matchedArray.length === 0) {
        return 0;
    } else {
        let matchPercentage = matchedArray.length / count;
        return matchPercentage;
    }

}

module.exports = matchingScore;
