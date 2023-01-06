const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

const lines = input.split('\n');

const [N, M] = lines[0].split(' ').map(Number);
const woods = lines[1].split(' ').map(Number);

// 적어도 M 많큼 가져가려면 설정할 수 있는 높이의 최대값
let max = Math.max(...woods);
let min = 0;

let answer = 0;
while(max >= min) {
    let mid = Math.floor((max + min)/2);

    let get = woods.reduce((acc, cur) => {
        let cut = cur - mid;
        cut = cut < 0 ? 0 : cut;

        return acc + cut;
    }, 0);

    if(get >= M) {
        if(mid > answer) answer = mid;
        min = mid + 1;
    }
    else max = mid - 1;
}

console.log(answer);