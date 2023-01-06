const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

const [N, M] = input.split(' ');

let divisor = N < M ? N : M;
let multiple = N > M ? N : M;

for (let i = divisor; i > 0; i--) {
    if (N % i == 0 && M % i == 0) {
        divisor = i;
        break;
    }
}

let i = multiple;
while (i % N != 0 || i % M != 0) i++;
multiple = i;

console.log(divisor);
console.log(multiple);