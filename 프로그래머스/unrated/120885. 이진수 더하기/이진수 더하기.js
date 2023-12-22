//20231218
function solution(bin1, bin2) {
    // 이진수를 10진수로 변환하여 합 계산
    const decimalSum = parseInt(bin1, 2) + parseInt(bin2, 2);

    // 10진수 합을 이진수로 변환하여 반환
    const binarySum = decimalSum.toString(2);

    return binarySum;
}