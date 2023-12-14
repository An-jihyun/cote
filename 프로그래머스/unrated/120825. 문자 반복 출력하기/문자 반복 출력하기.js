//20231130
//20231214
function solution(my_string, n) {
  return my_string.split('').map(char => char.repeat(n)).join('');
}

//split로 각 문자를 쪼개 배열로 반환
//map을 사용해 전체 각각에 m만큼 반복하게 하여 join으로 합치기