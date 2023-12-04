function solution(numbers, k) {
    let getBall = 1;

    for (let i = 0; i < k - 1; i++) {
        getBall = (getBall + 2 - 1) % numbers.length + 1;
    }

    return getBall;
}