function solution(a, b) {
    // 최대공약수를 구하는 함수
    function gcd(x, y) {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // 분자와 분모의 최대공약수로 약분
    const commonDivisor = gcd(a, b);
    const numerator = a / commonDivisor;
    const denominator = b / commonDivisor;

    // 분모의 소인수가 2와 5로만 이루어져 있는지 확인
    let tempDenominator = denominator;
    while (tempDenominator % 2 === 0) {
        tempDenominator /= 2;
    }
    while (tempDenominator % 5 === 0) {
        tempDenominator /= 5;
    }

    // 소수인 분모의 소인수가 2와 5로만 이루어져 있으면 1 반환, 그렇지 않으면 2 반환
    return tempDenominator === 1 ? 1 : 2;
}