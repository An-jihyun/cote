function solution(myString) {
    const numbers = myString.match(/\d/g) || [];
    return numbers.reduce((acc, num) => acc + +num, 0);
}