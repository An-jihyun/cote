function solution(cipher, code) {
    const decoded = Array.from(cipher).filter((_, index) => (index + 1) % code === 0).join('');
    return decoded;
}