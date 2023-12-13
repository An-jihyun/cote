function solution(my_str, n) {
  const result = [];
  
  // 문자열을 n씩 자르기
  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }
  
  return result;
}