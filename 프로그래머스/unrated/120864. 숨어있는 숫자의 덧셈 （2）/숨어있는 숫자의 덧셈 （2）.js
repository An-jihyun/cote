//20240103
function solution(my_string) {
    // 정규표현식을 사용하여 문자열에서 자연수 추출
    const numbers = my_string.match(/\d+/g);

    // 자연수가 없는 경우 0을 반환
    if (!numbers) {
        return 0;
    }

    // 추출된 자연수들의 합을 계산하여 반환
    return numbers.reduce((sum, num) => sum + parseInt(num), 0);
}
