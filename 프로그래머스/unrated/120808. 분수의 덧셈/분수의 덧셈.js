//최대 공약수 구하기
//b가 0이 될 때까지 a와 b를 바꾸면서 나머지를 계산
function getGcd(a, b) {
    return b === 0 ? a : getGcd(b, a % b);
    // a % b === 0 으로 두면 b가 0이 될 때 문제 발생
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1; 
    let denom = denom1 * denom2;
    let gcd = getGcd(numer, denom);
    
    //최대 공약수를 분자 분모에 나누고 배열에 넣기
    return [numer / gcd, denom /gcd];
}