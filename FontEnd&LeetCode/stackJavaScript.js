class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element; 
        // 对象是一系列 键值对 的集合，要向栈中添加元素，
        // 我们将使用 count 变量作为
        // items 对象的键名，插入的元素则是它的值
        this.count++;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const popResult =  this.items[this.count];
        delete this.items[this.count];
        return popResult;
    }
    peak() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
    clear() {
        while(!this.isEmpty()) {
            this.pop();
        }
    }
}

// 使用此数据结构解决实际问题

const stack = new Stack;

function decimalToBinary(decnumber) {
    const remStack = new Stack;
    let number = decnumber;
    let rem;
    let binaryString = '';

    while( number > 0 ) {
        // rem = Math.floor(number % 2);
        rem = number%2;
        remStack.push(rem);
        number = Math.floor(number/2);
        // number = number/2;
        console.log(`rem is: ${rem};number is:${number}`);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

console.log(decimalToBinary(8));
console.log(decimalToBinary(16));
console.log(decimalToBinary(10));
console.log(decimalToBinary(1000));

