function solution(array, n) {
  // reduce 함수를 사용하여 배열 내의 n의 갯수를 세기
  const count = array.reduce((acc, num) => (num === n ? acc + 1 : acc), 0);
  return count;
}