function solution(myString) {
    return myString.match(/\d/g).map(Number).sort((a, b) => a - b);
}