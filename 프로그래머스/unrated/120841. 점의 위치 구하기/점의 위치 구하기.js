function solution(dot) {
    const [x, y] = dot;
    return x > 0 ? (y > 0 ? 1 : 4) : (x < 0 ? (y > 0 ? 2 : 3) : "원점");
}