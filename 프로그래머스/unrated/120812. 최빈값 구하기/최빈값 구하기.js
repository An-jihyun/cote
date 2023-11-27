function solution(array) {
    const newMap = {};
    array.forEach(value => {
        newMap[value] = (newMap[value] || 0) + 1;
    });
    
    let mostFre = -1;
    let maxFre = 0;
    
    for (const key in newMap) {
    if (newMap.hasOwnProperty(key)) {
        const fre = newMap[key];
        
        if (fre > maxFre) {
            mostFre = parseInt(key);
            maxFre = fre;
        } else if (fre === maxFre) {
            mostFre = -1;
        }
    }
}
    
    return mostFre
}