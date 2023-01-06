
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

const [length, ... numbers] = input.split('\n').map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));
