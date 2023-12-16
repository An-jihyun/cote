function isDivisibleBy3OrContains3(num) {
    const numStr = String(num);
    return num % 3 === 0 || numStr.includes('3');
}

function solution(n) {
    const THREE = 3;

    for (let i = 1; i <= n; ++i) {
        if (isDivisibleBy3OrContains3(i)) {
            ++n;
        }
    }

    return n;
}