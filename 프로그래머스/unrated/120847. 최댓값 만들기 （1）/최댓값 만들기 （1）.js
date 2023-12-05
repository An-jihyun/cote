function solution(numbers) {
    // 배열을 내림차순으로 정렬
    numbers.sort((a, b) => b - a);

    // 가장 큰 수와 그 다음으로 큰 수를 곱하여 반환
    return numbers[0] * numbers[1];
}