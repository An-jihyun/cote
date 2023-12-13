function solution(array, height) {
  // filter 함수를 사용하여 키가 머쓱이보다 큰 사람들을 걸러내고, 그 개수를 반환
  const count = array.filter(person => person > height).length;
  return count;
}