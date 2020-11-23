/*
 * @Author: your name
 * @Date: 2020-08-06 20:25:13
 * @LastEditTime: 2020-11-23 18:01:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\dataStructures\stackJavaScript.js
 */
class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }
    push(element) {
        this.items[this.count] = element
        this.count++
    }
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }
    pop() {
        if(this.isEmpty()) {
            return undefined
        }
        this.count--
        const popResult =  this.items[this.count]
        delete this.items[this.count]
        return popResult
    }
    peak() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
    clear() {
        while(!this.isEmpty()) {
            this.pop()
        }
    }
}


const stack = new Stack

function decimalToBinary(decnumber) {
    const remStack = new Stack
    let number = decnumber
    let rem;
    let binaryString = ''

    while( number > 0 ) {
        // rem = Math.floor(number % 2);
        rem = number%2;
        remStack.push(rem);
        number = Math.floor(number/2);
        // number = number/2;
        console.log(`rem is: ${rem};number is:${number}`);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}

console.log(decimalToBinary(8))
console.log(decimalToBinary(16))
console.log(decimalToBinary(10))
console.log(decimalToBinary(1000))

