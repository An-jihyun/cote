//20231127
//20231213
function solution(array) {
  // 오름차순으로 정렬
  const sortedArray = array.slice().sort((a, b) => a - b);

  // 중앙값 계산
  const medianIndex = Math.floor(sortedArray.length / 2);
  return sortedArray[medianIndex];
}

//처음 코드
// function solution(array) {
//     //오름차순으로 정렬
//     //sort 메서드는 배열을 정렬하며, 비교 함수를 제공하여 정렬 순서를 지정
//     const sortedArray = array.sort((a, b) => a - b);
    
//     //중앙값 계산
//     const MedianIndex = Math.trunc(array.length/2);
//     return array[MedianIndex];
// }

// sortedArray로 정렬된 배열을 생성했지만, 중앙값을 계산할 때에는 여전히 array를 사용
// 중앙값을 찾기 위해 정렬된 배열을 사용하면서 기존 배열의 순서가 바뀌게 됨
// 변경된 부분은 array.slice()로 배열을 복사하여 정렬된 배열을 생성
// 이렇게 하면 원래의 배열은 그대로 유지, 정렬된 배열에서 중앙값을 계산