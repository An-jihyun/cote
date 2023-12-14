//20231130
//20231214
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputNum;

rl.on('line', (line) => inputNum = Number(line))
  .on('close', () => {
    for (let i = 1; i <= inputNum; i++) {
      console.log('*'.repeat(i));
    }
  });