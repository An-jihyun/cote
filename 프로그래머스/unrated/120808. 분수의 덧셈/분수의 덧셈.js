//20231126
//20231208
const solution = (numer1, denom1, numer2, denom2) => {
    const numer = (numer1 * denom2) + (numer2 * denom1);
    const denom = denom1 * denom2;
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//최대 공약수(Greatest Common Divisor)를 구하는 함수
    const getGcd = gcd(numer, denom);
    return [numer / getGcd, denom / getGcd];
};
//최대 공약수로 나눈 numer와 denom을 배열로 반환 => 기약분수로 변환