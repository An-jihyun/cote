//20231218
function solution(i, j, k) {
    let count = 0;

    for (let num = i; num <= j; num++) {
        const numStr = num.toString();
        count += numStr.split(k.toString()).length - 1;
    }

    return count;
}