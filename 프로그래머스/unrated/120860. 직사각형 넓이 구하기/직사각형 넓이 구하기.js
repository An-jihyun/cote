function solution(dots) {
    // x 좌표와 y 좌표를 각각 정렬하여 최소와 최대 값을 찾습니다.
    const sortedX = dots.map(dot => dot[0]).sort((a, b) => a - b);
    const sortedY = dots.map(dot => dot[1]).sort((a, b) => a - b);

    // x 축과 y 축의 최소와 최대 값을 이용하여 넓이를 계산합니다.
    const width = sortedX[3] - sortedX[0];
    const height = sortedY[3] - sortedY[0];

    // 넓이를 반환합니다.
    return width * height;
}
