class People {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
}
class Student extends People {
    constructor(name,number) {
        super(name);
        this.number = number;
    }
    sayHi() {
        console.log(
            `${this.name} say Hi`
        )
    }
}
class Teacher extends People {
    constructor(name,major) {
        super(name);
        this.major = major;
    }
    teach() {
        console.log(`${this.name} 教授 ${this.major}`);
    }
}
const xialuo = new Student('夏洛',100);
const wanglaoshi = new Teacher('王老师','语文');

// console.log(xialuo.__proto__);
// console.log(Student.prototype);
// console.log(xialuo.__proto__ === Student.prototype);

// // console.log(xialuo.prototype);
console.log(Student.prototype.__proto__);
console.log(People.prototype);
console.log(Student.prototype.__proto__ === People.prototype);

// console.log('===========');
// console.log(xialuo.number);
// console.log(xialuo.name);

// console.log(xialuo.hasOwnProperty('sayHi'));
// console.log(xialuo.hasOwnProperty('name'));
// console.log(xialuo.hasOwnProperty('number'));

// console.log(Object.prototype);
// expected output: true
// expected output: true

// var buz = {
//     fog: 'stack',
//     test:'testA',
//   };
  
//   for (var name in xialuo) {
//     if (xialuo.hasOwnProperty(name)) {
//       console.log('this is fog (' + 
//         name + ') for sure. Value: ' + xialuo[name]);
//     }
//     else {
//       console.log(name); // toString or something else
//     }
//   }