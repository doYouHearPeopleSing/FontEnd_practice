class People {
    constructor(name,age) {
        this.name = name,
        this.age = 20
    }
    sayHi() {
        return `Hi I am ${this.name}!`;
    }
}
class Student extends People{
    constructor(name,number) {
        super(name);
        this.number = number
    }
    // sayNumber() {
    //     return `My student number is :${this.number}`;
    // }
}
const Zhang = new Student('Zhangsan',123);

// console.log(Zhang.age);
// console.log(Zhang.name);
// console.log(Zhang.sayHi());

console.log(typeof Student);
console.log(typeof People);

console.log(Zhang.__proto__);
console.log(Student.prototype);
console.log(Zhang.__proto__ === Student.prototype)