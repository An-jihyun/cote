function solution(array) {
  // reduce 함수를 사용하여 배열 내의 7의 갯수를 세기
  const count = array.reduce((acc, num) => acc + String(num).split('7').length - 1, 0);
  return count;
}
