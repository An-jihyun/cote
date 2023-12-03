function solution(rsp) {
    return rsp.split('').map(digit => (digit === '2' ? '0' : digit === '0' ? '5' : '2')).join('');
}