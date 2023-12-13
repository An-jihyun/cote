//20231128
//20231213
const solution = (numbers) => numbers.reduce((a,b) => a+b, 0) / numbers.length;

// reduce로 배열의 각 요소를 누적하여 합 계산 (초기값 0, a=누적값, b=각 배열 요소)

// / numbers.length로 계산된 합을 배열의 길이로 나누어 평균 계산