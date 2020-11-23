class stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peak() {
        return this.items[this.items.length-1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}
//Finsh constuctor,we will do something to check the stack

const stackTest = new stack;
console.log(stackTest.isEmpty());

stackTest.push(`a`);
stackTest.push(`b`);
stackTest.push(`c`);

console.log(`The top of this stack is: ${stackTest.peak()}`);

const popValue = stackTest.pop();

console.log(`The pop value is: ${popValue}`);

console.log(`Now the top of this stack is: ${stackTest.peak()}`);

console.log(`the size of this stack is: ${stackTest.size()}`)

console.log(stackTest);
console.log(stackTest.items.toString());
