function solution(my_string) {
  return my_string
    .split('')
    .filter((value, index, self) => self.indexOf(value) === index)
    .join('');
}