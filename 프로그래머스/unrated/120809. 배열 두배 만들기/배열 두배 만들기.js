//map을 사용하여 배열의 각 요소에 연산
//화살표 함수를 사용하여 간결하게 가독성 높이기
//var 대신 const를 사용하여 변수의 재할당을 방지
function solution(numbers) {
    const answer = numbers.map(x=> x * 2);
    return answer;
}