//20231127
//20231213
function solution(n) {
    return Array.from({ length: Math.floor((n + 1) / 2) }, (_, index) => index * 2 + 1);
}
// Array.from을 사용하여 배열 생성
// Math.floor((n + 1) / 2)는 n이 홀수일 경우 n을 2로 나눈 몫에 1을 더한 값, n이 짝수일 경우 n을 2로 나눈 몫. 배열의 길이를 설정
//(_, index) => index * 2 + 1: 각 배열 요소를 계산하는 콜백 함수. _는 사용하지 않는 매개변수, index * 2 + 1은 인덱스를 기반으로 1씩 증가하는 홀수 값 계산.