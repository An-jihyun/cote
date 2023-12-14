function solution(numbers) {
    let maxProduct = Number.MIN_SAFE_INTEGER;

    // 모든 가능한 두 숫자 쌍의 곱 계산
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const product = numbers[i] * numbers[j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    return maxProduct;
}