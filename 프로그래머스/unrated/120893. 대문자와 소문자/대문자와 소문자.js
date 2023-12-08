function solution(my_string) {
    return Array.from(my_string).map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}