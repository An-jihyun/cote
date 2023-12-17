function solution(numlist, n) {
    // numlist를 n으로부터의 거리와 크기에 따라 정렬
    numlist.sort((a, b) => {
        const distanceA = Math.abs(a - n);
        const distanceB = Math.abs(b - n);

        // 거리가 같다면 큰 수가 앞으로 오도록 정렬
        if (distanceA === distanceB) {
            return b - a;
        }

        // 거리에 따라 정렬
        return distanceA - distanceB;
    });

    return numlist;
}