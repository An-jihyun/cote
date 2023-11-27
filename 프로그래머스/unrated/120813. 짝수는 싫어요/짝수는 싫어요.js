function solution(n) {
    return Array.from({ length: Math.floor((n + 1) / 2) }, (_, index) => index * 2 + 1);
}