function solution(myString) {
    const result = myString.split('').filter(char => !('aeiou'.indexOf(char) !== -1)).join('');
    return result;
}