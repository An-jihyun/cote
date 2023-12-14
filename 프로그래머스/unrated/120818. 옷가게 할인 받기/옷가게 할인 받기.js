//20231129
//20231214
function solution(price) {
    return Math.floor(
        price * (price >= 500000 ? 0.8 : price >= 300000 ? 0.9 : price >= 100000 ? 0.95 : 1)
    );
}
//삼항 연산자로 각 조건에 따른 할인율을 직접 계산
//짧다는 것이 좋은것이 아님, 가독성이 떨어지는걸 고려하기