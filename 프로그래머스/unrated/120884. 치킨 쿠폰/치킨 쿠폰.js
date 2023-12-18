function solution(chicken) {
    let serviceChickenCount = 0;
    
    while(chicken >= 10){
        serviceChickenCount += Math.floor(chicken / 10);
        chicken = chicken % 10 + Math.floor(chicken / 10);
    }
    
    return serviceChickenCount;
}
