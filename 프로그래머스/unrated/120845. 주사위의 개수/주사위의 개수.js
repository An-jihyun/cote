function solution(box, n) {
    const [width, height, depth] = box.sort((a, b) => a - b);
    
    return Math.floor(width / n) * Math.floor(height / n) * Math.floor(depth / n);
}