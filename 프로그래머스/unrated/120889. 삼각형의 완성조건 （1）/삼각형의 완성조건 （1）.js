function solution(sides) {
  const [a, b, c] = sides;
  return a + b > c && b + c > a && a + c > b ? 1 : 2;
}