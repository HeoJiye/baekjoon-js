const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

const lines = input.split('\n');

const [N, M] = lines[0].split(' ').map(Number);
const cards = lines[1].split(' ').map(Number);

let best = 0;

combination(cards, [], 0, 3);

console.log(best);

function combination(array, picked, index, pickN) {
    if(index > array.length) return;
    if(pickN === 0) {
        const result = picked.reduce((acc, cur) => acc + cur);
        if(result <= M && result > best) best = result;
        return;
    }
    for(let i = index; i < array.length; i++) {
        combination(array, [...picked, array[i]], i+1, pickN-1);
    }
}