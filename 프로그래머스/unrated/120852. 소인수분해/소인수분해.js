function solution(n) {
    const factors = [];

    for (let divisor = 2; n > 1; divisor++) 
        for (; n % divisor === 0; factors.push(divisor), n /= divisor);

    return [...new Set(factors)];
}