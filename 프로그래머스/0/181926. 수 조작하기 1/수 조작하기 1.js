function solution(n, control) {
    const actions = {
        'w': () => n += 1,
        's': () => n -= 1,
        'd': () => n += 10,
        'a': () => n -= 10,
    };

    for (let i = 0; i < control.length; i++) {
        actions[control[i]]();
    }

    return n;
}
