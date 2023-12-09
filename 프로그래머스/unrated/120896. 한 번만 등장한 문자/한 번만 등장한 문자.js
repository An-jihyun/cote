function solution(s) {
  const charCount = s.split('').reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});

  const uniqueChars = Object.keys(charCount).filter(char => charCount[char] === 1);

  return uniqueChars.length > 0 ? uniqueChars.sort().join('') : '';
}