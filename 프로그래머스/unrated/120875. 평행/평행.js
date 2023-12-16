function solution(dots) {
  var answer = 0;

  function calculation(a, b, c, d) {
    // 두 직선이 평행한 경우, 두 직선의 기울기가 같아야 함
    if ((b[1] - a[1]) * (d[0] - c[0]) === (d[1] - c[1]) * (b[0] - a[0])) {
      answer += 1;
    }
  }

  // 1-2, 3-4가 이어졌을 때
  calculation(dots[0], dots[1], dots[2], dots[3]);

  // 1-3, 2-4가 이어졌을 때
  calculation(dots[0], dots[2], dots[1], dots[3]);

  // 1-4, 2-3가 이어졌을 때
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}
