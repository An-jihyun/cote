function solution(emergency) {
    const sorted = emergency.slice().sort((a, b) => b - a);
    const indexMap = new Map(sorted.map((value, index) => [value, index + 1]));

    return emergency.map(value => indexMap.get(value));
}