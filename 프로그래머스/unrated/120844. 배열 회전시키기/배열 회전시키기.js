function solution(numbers, direction) {
    const n = numbers.length;
    
    return direction === 'left' ? [...numbers.slice(1), numbers[0]] :
           direction === 'right' ? [numbers[n - 1], ...numbers.slice(0, n - 1)] :
           (console.error('Invalid direction:', direction), numbers);
}