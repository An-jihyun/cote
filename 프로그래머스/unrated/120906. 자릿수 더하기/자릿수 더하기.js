function solution(n) {
  return String(n).split('').reduce((acc, digit) => acc + Number(digit), 0);
}