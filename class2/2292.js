const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

// 1 / 6 / 12 / 18

let N = Number(input);

let i = 1;
N -= 1;
while (N > 0) {
    N -= i * 6;
    i++;
}

console.log(i);