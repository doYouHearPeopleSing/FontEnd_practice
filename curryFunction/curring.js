/*
柯里化 是一种转换，将 f(a,b,c) 转换为可以被以 f(a)(b)(c) 的形式进行调用
*/

function currySimple(f) {
    return function(a) {
        return function(b) {
            return f(a,b);
        }
    }
}

function print(a,b) {
    console.log(a);
    console.log(b);
}

let curriedSumSimple = currySimple(print);

curriedSumSimple(1)(2);
console.log(`-------`);
curriedSumSimple(2)(1);
console.log(`-------`)

function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(this,args);
        }else {
            return function(...args2) {
                return curried.apply(this,args.concat(args2));
            }
        }
    }
}

function sum(a, b, c) {
    return a + b + c;
  }
  
let curriedSum = curry(sum);

console.log(curriedSum(1,2,3));
console.log(curriedSum(1)(2,3));
console.log(curriedSum(1)(2)(3));



