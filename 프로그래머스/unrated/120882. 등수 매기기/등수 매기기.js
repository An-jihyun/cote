function solution(score) {
    // 평균을 계산하여 학생의 등수를 매김
    const rankedScores = score.map((student, index) => {
        const average = (student[0] + student[1]) / 2;
        return { index: index + 1, average: average };
    });

    // 평균에 따라 정렬
    rankedScores.sort((a, b) => b.average - a.average);

    // 동일한 평균에 대해 같은 등수를 부여
    let currentRank = 1;
    rankedScores[0].rank = currentRank;

    for (let i = 1; i < rankedScores.length; i++) {
        if (rankedScores[i].average === rankedScores[i - 1].average) {
            // 이전 학생과 평균이 같다면 같은 등수 부여
            rankedScores[i].rank = currentRank;
        } else {
            // 다르다면 현재 등수를 부여하고 등수 업데이트
            currentRank = i + 1;
            rankedScores[i].rank = currentRank;
        }
    }

    // 등수를 결과 배열에 저장
    const result = rankedScores.sort((a, b) => a.index - b.index).map(student => student.rank);

    return result;
}