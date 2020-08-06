var bool = true;
var number = 2020;
var arrayA = [1,2,3];
var arrayB = new Array();
var valueNull = null;
var valueUndefined = undefined;

var date = new Date();

function type (target) {
    console.log(`---START---`);
    console.log(target);
    console.log(`the type of it is:`);
    console.log(typeof target);
    console.log(`---END---`)
}

function instanceType (target,type) {
    console.log(`the type of${target} is OF ${type} is: ${target instanceof type}`);
}

// type(bool);
// type(number)
// type(arrayA);
// type(arrayB);
// type(valueNull);
// type(valueUndefined);
function constructorType(target) {    
    console.log(target.constructor.name);
}
// instance(arrayB,Array);
// instance(arrayA,Array);
// instance(date,Date);
// instance(arrayB,Date);

// console.log(date.constructor === Date);

// constructorType(date,Date);
// constructorType(arrayA,Array);

function toStringType(target) {
    const result = Object.prototype.toString.call(target);
    console.log(result);
}

class People {
    constructor(name) {
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
}
const Zhang = new Student('Zhangsan',123);
const Dong = new People('Dong');


function A(){};
function B(){};
var aObj = new A();


function C(){};
function D(){};
C.prototype = new D(); //C继承自D
var cObj = new C();

constructorType(cObj);
// constructorType(Dong);
// toStringType(Dong);


