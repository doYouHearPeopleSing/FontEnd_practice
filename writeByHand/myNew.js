function Father(name){
    this.name = name;
    this.sayname=function(){
        console.log(this.name)
    }
    return this;
    // 是否存在这个 return this 很重要，如果存在的话，那么我们自己写的 new 是返回这个对象
    // 否则就是返回我们自己构建的对象
}

function myNew(conFun, ...args){ // ...args为ES6展开符,也可以使用arguments
    //先创建一个空的对象
    let obj = {};
    
    //新对象会被执行 prototype 连接
    obj.__proto__ = conFun.prototype;
    
    //新对象和函数调用的this绑定起来
    let result = conFun.call(obj,...args);

    //判断函数返回值如果是 null 或者 undefined 则返回 obj,否则就返回 result
        
    // console.log(result instanceof Object);
    // 这句话的作用可以构造函数是否返回一个对象 



    return result instanceof Object?result:obj;
}

const son = myNew(Father,'kimi');
const A = myNew(Father,'fuuuuuuuuuck');
son.sayname();
A.sayname();
console.log(`------------`);
console.log(son);