
class Queue {
    constructor() {
        this.count = 0;
        this.lowerestCount = 0;
        this.items = {};
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }
        const dequeueResult = this.items[this.lowerestCount];
        delete this.items[this.lowerestCount];
        this.lowerestCount++;
        return dequeueResult;
    }
    isEmpty() {
        return this.count - this.lowerestCount === 0; 
    }
    size() {
        return this.count - this.lowerestCount;
    }
    clear() {
        this.items = {};
        this.count = this.lowerestCount = 0;
    }
    peak() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowerestCount];
    }
    toString() {
        if(this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowerestCount]}`;
        for (let i = this.lowerestCount + 1; i<this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const queue = new Queue;
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log(queue);

console.log(queue.dequeue());

console.log(queue);

console.log(queue.peak());

console.log(queue.toString());

queue.clear();

console.log(queue.size());