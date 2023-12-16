function solution(board) {
    const n = board.length;
    let safeCount = 0;

    // 주어진 좌표가 유효한지 확인하는 함수
    function isValid(x, y) {
        return x >= 0 && x < n && y >= 0 && y < n;
    }

    // 주어진 좌표 주변에 지뢰가 있는지 확인하는 함수
    function hasMine(x, y) {
        return isValid(x, y) && board[x][y] === 1;
    }

    // 모든 칸을 순회하며 안전지대를 확인
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 현재 칸에 지뢰가 없으면 안전지대로 간주하고 카운트 증가
            if (board[i][j] === 0) {
                let isSafe = true;

                // 주변 8방향을 확인하여 지뢰가 있는 경우 안전지대가 아님
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        if (dx === 0 && dy === 0) continue; // 현재 위치는 제외
                        if (hasMine(i + dx, j + dy)) {
                            isSafe = false;
                            break;
                        }
                    }
                    if (!isSafe) break;
                }

                // 안전지대이면 카운트 증가
                if (isSafe) {
                    safeCount++;
                }
            }
        }
    }

    return safeCount;
}
