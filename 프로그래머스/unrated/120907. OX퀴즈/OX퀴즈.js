function solution(quiz) {
  return quiz.map((equation) => {
    const [left, operator, right, equal, result] = equation.split(' ');
    return parseInt(left) + (operator === '+' ? parseInt(right) : -parseInt(right)) === parseInt(result) ? 'O' : 'X';
  });
}