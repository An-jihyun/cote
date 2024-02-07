function solution(num_list) {
    let oddSum = "";
    let evenSum = "";
    
    for (let num of num_list) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    
    return parseInt(oddSum) + parseInt(evenSum);
}