function solution(myString) {
    return myString
        .split('')
        .map(char => (char.toLowerCase() === 'a') ? 'A' : (char === char.toUpperCase()) ? char.toLowerCase() : char)
        .join('');
}
