function solution(n) {
    let compositeCount = 0;

    for (let num = 4; num <= n; num++) {
        if (hasThreeDivisors(num)) {
            compositeCount++;
        }
    }

    return compositeCount;
}

function hasThreeDivisors(num) {
    let divisorCount = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisorCount++;
            if (divisorCount > 3) {
                return true; // 더 이상 체크할 필요가 없음
            }
        }
    }

    return divisorCount === 3;
}