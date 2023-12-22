//20231217
function solution(babbling) {
  return babbling.map(word => word.replaceAll(/aya|ye|woo|ma/gi, '')).filter(a => a ==='').length
}