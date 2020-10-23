// 基本类型： string number boolean undefined null 
var bool = true;
var number = 2020;
var valueNull = null;
var valueUndefined = undefined;

var arrayB = new Array();
var date = new Date();
var Num = new Number();
var Str = new String();

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


function ParentCombine (name) {
    this.name = name;
    this.colors = ['red','green','yellow'];
}

function ChildCombine(name,age) {
    ParentCombine.call(this,name);
    this.age = age;
}

ChildCombine.prototype = new ParentCombine();
ChildCombine.prototype.constructor = ChildCombine;

var Parent = new ParentCombine('Touniem',55);
var Child = new ChildCombine('Zhangzeheng',55);

// typeof 只能检测基本类型，同时 null 是一个特殊值，不可以使用 typeof
function type (target) {
    if(target === null) {
        return `null`;
    }
    switch(typeof target) {
        case `bool` :return `bool`;
        case `number` :return `number`;
        case `string` :return `string`;
        case `undefined`: return `undefined`;        
    }
}

// instanceof 的右侧只能是一个对象；无法检测基本类型，基本类型不是对象
function instanceType (target) {
    if(target instanceof String) {
        return `String`;
    } else if(target instanceof Array) {
        return `Array`;
    } else if(target instanceof Date) {
        return `Date`;
    }    
}

// 此方法无法辨别基本类型和基本包装类型之间的区别
// 但是可以判断基本类型和基本包装类型
// 此方法无法识别自定义的类型

function toStringType(target) {
    return  Object.prototype.toString.call(target);
}

/**
 * 目前来看的最佳实践，可以判断基本类型/基本包装类型/自定义的类
 * 包括自定义的类在内也可以判断   
 */
function constructorType(target) {    
    return (target.constructor.name);
}

// 经过测试，稳定好用

const typ = constructorType([1,2,3]);
console.log(typ)

console.log(toStringType([1,2,3]));

console.log(Array.isArray([1,2,3]));
