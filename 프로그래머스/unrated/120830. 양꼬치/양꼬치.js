//20231201
//20231214
function solution(n, k) {
    const yakitori = 12000;
    const drink = 2000;

    return n * yakitori + Math.max(0, (k - Math.floor(n / 10)) * drink);
}
