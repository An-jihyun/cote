function solution(lines) {
  let answer = 0;
  const LINE_MAP_SIZE = 200;
  let lineMap = new Array(LINE_MAP_SIZE).fill(0);

  for (const line of lines) {
    const left = line[0];
    const right = line[1];

    for (let j = left; j < right; j++) {
      lineMap[j + LINE_MAP_SIZE / 2] += 1;
    }
  }

  for (const count of lineMap) {
    if (count > 1) {
      answer += 1;
    }
  }

  return answer;
}