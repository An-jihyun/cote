//20231130
//20231214
function solution(num_list) {
  // reduce 함수를 사용하여 배열을 순회하면서 짝수와 홀수의 개수를 계산
  return num_list.reduce(
    (counts, number) => {
      // number가 짝수인 경우 counts 배열의 첫 번째 요소를 증가, 홀수인 경우 두 번째 요소를 증가
      counts[number % 2]++;
      // 최종 결과 반환
      return counts;
    },
    // 초기값으로 [0, 0] 배열을 사용, 첫 번째 요소는 짝수 개수, 두 번째 요소는 홀수 개수
    [0, 0]
  );
}
