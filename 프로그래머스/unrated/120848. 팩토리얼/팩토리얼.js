function solution(n) {
    let i = 1;
    let factorial = 1;

    // i!이 n 이하인 동안 반복
    while (factorial <= n) {
        i++;
        factorial *= i;
    }

    // i!이 n을 초과한 경우 이전 값으로 감소
    return i - 1;
}
