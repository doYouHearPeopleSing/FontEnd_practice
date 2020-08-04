class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);            
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count;i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
    addBack(element) {        
        this.items[this.count] = element;
        this.count++;
        
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    removeFront() {        
        if(this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]; 
        return result;
    }
    peakFront() {
        return this.items[this.lowestCount];
    }
    peakBack() {
        return this.items[this.count];
    }
    size() {
        return this.count - this.lowestCount;
    }
}

function check(stringCheck) {
    const deque = new Deque;
    for( let i = 0;i<stringCheck.length;i++) {
        deque.addBack(stringCheck[i]);
    }
    let isEqual = true;
    while(deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        console.log(`firstChar is: ${firstChar};and lastChar is: ${lastChar}`);
        if( firstChar !==  lastChar) {
            isEqual = false;
        }
    }    
    return isEqual;
}
console.log(check('abcde'));
console.log(check(`abcba`));
console.log(check(`aaaaaa`));