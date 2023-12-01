function solution (angle) {
    if (angle > 0 && angle < 90) return 1; // 예각
    if (angle === 90) return 2; // 직각
    if (angle > 90 && angle < 180) return 3; // 둔각
    if (angle === 180) return 4; // 평각
    return 0; // 잘못된 각도
}