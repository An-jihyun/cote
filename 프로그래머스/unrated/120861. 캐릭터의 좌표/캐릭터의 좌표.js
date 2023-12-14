function solution(keyinput, board) {
    // 시작 좌표는 [0, 0]
    let position = [0, 0];

    // keyinput 배열을 순회하면서 캐릭터의 위치를 업데이트
    for (const direction of keyinput) {
        switch (direction) {
            case "up":
                if (position[1] < (board[1] - 1) / 2) {
                    position[1]++;
                }
                break;
            case "down":
                if (position[1] > -(board[1] - 1) / 2) {
                    position[1]--;
                }
                break;
            case "left":
                if (position[0] > -(board[0] - 1) / 2) {
                    position[0]--;
                }
                break;
            case "right":
                if (position[0] < (board[0] - 1) / 2) {
                    position[0]++;
                }
                break;
            default:
                break;
        }
    }

    return position;
}