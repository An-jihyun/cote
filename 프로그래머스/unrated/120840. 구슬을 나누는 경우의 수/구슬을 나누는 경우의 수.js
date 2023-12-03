const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);

const solution = (balls, share) => Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
