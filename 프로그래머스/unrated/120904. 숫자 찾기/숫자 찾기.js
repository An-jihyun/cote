function solution(num, k) {
  const numString = num.toString();
  const index = numString.indexOf(k.toString());
  return index !== -1 ? index + 1 : -1;
}