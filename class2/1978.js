const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const numbers = input[1].split(' ').map(Number);

const primes = get_primes(Math.max(... numbers));

let num = 0;
for (item of numbers) {
    if(primes[item]) num += 1;
}

console.log(num);

function get_primes(n) {
    const primes = [];
    primes[0] = false;
    primes[1] = false;
    for(let i = 2; i <= n; i++) primes[i] = true;
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(!primes[i]) continue;
        for(let j = i * i; j <= n; j += i) {
            primes[j] = false;
        }
    }
    return primes;
}