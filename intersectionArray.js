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

console.log(getCommonElements(["a", "b", "c"], ["b", "c"]));
console.log(getCommonElements(["abc", "bc", "c"], ["bc", "c"]));


const matchingScore = (firstWord, secondWord) => {
    const count = firstWord.length;
    const matchedArray = getCommonElements(firstWord, secondWord);

    if (matchedArray.length === count) {
        return 1;
    } else if (matchedArray.length === 0) {
        return 0;
    } else {
        //3 
        let matchPercentage = matchedArray / count;
        return matchPercentage;
        //calculate the percentage 
    }

}

console.log(matchingScore("abc", "abc"));
console.log(matchingScore("abc", "xyz"));
console.log(matchingScore("abc", "abz"));

export default matchingScore;