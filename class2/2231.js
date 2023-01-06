const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

const num = Number(input);

let i;
for(i = 0; i < num; i++) {
    sum = decomposition_sum(i);
    if(sum === num) break;
}

if(sum === num) console.log(i);
else console.log(0);

function decomposition_sum(n) {
    const digits = n.toString().split('').map(Number);
    return n + digits.reduce((acc, cur) => acc + cur);
}