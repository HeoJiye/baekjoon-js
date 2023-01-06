const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

const numbers = input.split('\n').map(Number);
const N = numbers.shift();

const apart = [];
for(let i = 0; i < 15; i++) {
    apart[i] = [];
    for(let j = 1; j < 15; j++) {
        if(i == 0) apart[i][j] = j;
        else {
            apart[i][j] = 0;
            for(let b = 1; b <= j; b++) {
                apart[i][j] += apart[i-1][b];
            }
        }
    }
}

for(let i = 0; i < N; i++) {
    const k = numbers.shift();
    const n = numbers.shift();
    
    console.log(apart[k][n]);
}
