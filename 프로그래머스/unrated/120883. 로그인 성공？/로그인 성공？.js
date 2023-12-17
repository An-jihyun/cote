function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw;

    const user = db.find(([userId, userPw]) => userId === inputId);

    if (!user) {
        return "fail";
    }

    const [, storedPw] = user;

    if (inputPw === storedPw) {
        return "login";
    } else {
        return "wrong pw";
    }
}