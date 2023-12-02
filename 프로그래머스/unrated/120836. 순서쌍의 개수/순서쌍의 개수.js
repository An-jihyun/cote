function solution(n) {
    return Array.from({ length: n }, (_, i) => n % (i + 1) === 0).filter(Boolean).length;
}