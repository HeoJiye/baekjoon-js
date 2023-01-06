const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString();

const num = Number(input);

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }   
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length += 1;

        return newNode;
    }

    shift() {
        const val = this.head.val;

        if(this.head.next != null) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length -= 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    
        return val;
    }

    getLength() { 
        return this.length;
    }
}

const cards = new LinkedList();

for(let i = 1; i <= num; i++) {
    cards.push(i);
}
while(cards.getLength() > 1) {
    cards.shift();
    cards.push(cards.shift());
}

console.log(cards.shift());