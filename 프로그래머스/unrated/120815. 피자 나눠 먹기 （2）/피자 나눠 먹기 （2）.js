//while문: 조건문이 참일 때 실행되는 반복문이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단
function solution(n) {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}