//20231127
//20231213
function solution(array) {
    const frequencyMap = array.reduce((acc, num) => (acc.set(num, (acc.get(num) || 0) + 1), acc), new Map());
    const sortedMap = [...frequencyMap].sort((a, b) => b[1] - a[1]);
    return sortedMap.length === 1 || sortedMap[0][1] > sortedMap[1][1] ? sortedMap[0][0] : -1;
}

// 1. 빈도수 계산을 위한 Map 생성
// frequencyMap은 new Map()을 통해 빈 Map을 생성
// array.reduce를 사용하여 배열의 각 요소를 순회
// acc.set(num, (acc.get(num) || 0) + 1)은 Map에 현재 숫자 num을 키로 하고, 해당 숫자의 빈도수를 값으로 하는 엔트리를 추가하는데, 만약 이미 해당 숫자에 대한 엔트리가 존재한다면 빈도수 1 증가

// 2. 빈도수를 기준으로 Map을 정렬
// [...frequencyMap]은 Map을 배열로 변환
// Map의 각 엔트리는 [key, value] 형태로 배열에 저장
// sort 함수를 이용하여 빈도수를 기준으로 내림차순으로 정렬
// 비교 함수 b[1] - a[1]을 사용하여 빈도수에 대해 정렬

// 3. 최빈값 확인 및 반환
// sortedMap.length === 1은 정렬된 배열의 길이가 1인 경우, 즉 모든 숫자의 빈도수가 같은 경우를 체크
// sortedMap[0][1] > sortedMap[1][1]은 가장 높은 빈도수를 가진 첫 번째 숫자의 빈도수가 두 번째 숫자의 빈도수보다 큰 경우를 체크
// 두 경우 중 하나라도 만족하면 가장 빈도수가 높은 숫자를 최빈값으로 반환
// 조건을 만족하지 않는다면, 즉 최빈값이 여러 개라면 -1을 반환

// 객체 리터럴을 사용하여 Map을 사용하여 직접 초기화
// 배열의 요소를 가져오는 부분에서 비구조화 할당을 사용하여 가독성 UP
// 마지막 반환 부분에서 삼항 연산자를 사용하여 간결하게 정리