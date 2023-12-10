function solution(array) {
  const maxNum = Math.max(...array); // 배열에서 가장 큰 수 찾기
  const maxIndex = array.indexOf(maxNum); // 가장 큰 수의 인덱스 찾기
  return [maxNum, maxIndex];
}
