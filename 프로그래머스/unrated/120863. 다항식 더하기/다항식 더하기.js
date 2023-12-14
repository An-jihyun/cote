function solution(code) {
  const arr = code.split(' ');
  const obj = {
    num: 0,
  };

  if (code.length === 0) return '';

  arr.forEach((e, i) => {
    if (i % 2 === 0) {
      NumberAndAlphabet(e);
    } else {
      cal = e;
    }
  });

  function NumberAndAlphabet(str) {
    if (isNaN(Number(str))) {
      const lastChar = str[str.length - 1];
      const value = isNaN(Number(str[0])) ? 1 : Number(str.slice(0, -1));
      obj[lastChar] = (obj[lastChar] || 0) + value;
    } else {
      obj['num'] += Number(str);
    }
  }

  if (Object.keys(obj).filter((e) => e !== 'num').length === 0) {
    return obj['num'].toString();
  } else if (
    obj['num'] === 0 &&
    Object.keys(obj).filter((e) => e !== 'num').length !== 0
  ) {
    const key = Object.keys(obj).find((e) => e !== 'num');
    const num = obj[key].toString() === '1' ? '' : obj[key];
    return num + key;
  } else {
    const key = Object.keys(obj).find((e) => e !== 'num');
    const num = obj[key].toString() === '1' ? '' : obj[key];
    return num + key + ' + ' + obj['num'];
  }
}
