function solution(strArr) {
    const maxGroupSize = Math.max(...Object.values(strArr.reduce((acc, str) => ((acc[str.length] = (acc[str.length] || []).concat(str)), acc), {})).map(group => group.length));
    return maxGroupSize;
}