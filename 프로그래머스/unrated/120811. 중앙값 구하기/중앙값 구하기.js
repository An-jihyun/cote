function solution(array) {
    //오름차순으로 정렬
    //sort 메서드는 배열을 정렬하며, 비교 함수를 제공하여 정렬 순서를 지정
    const sortedArray = array.sort((a, b) => a - b);
    
    //중앙값 계산
    const MedianIndex = Math.trunc(array.length/2);
    return array[MedianIndex];
}