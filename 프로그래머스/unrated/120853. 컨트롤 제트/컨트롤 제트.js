function solution(s) {
  const tokens = s.split(' ');
  let result = 0;
  let tempNumber = 0;
  let isSubtract = false;

  for (const token of tokens) {
    if (token === 'Z') {
      isSubtract = true;
    } else {
      const number = parseInt(token, 10);
      if (isSubtract) {
        result -= tempNumber;
        isSubtract = false;
      }
      tempNumber = number;
      result += number;
    }
  }

  if (isSubtract) {
    result -= tempNumber;
  }

  return result;
}