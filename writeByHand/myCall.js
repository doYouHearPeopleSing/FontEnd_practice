Function.prototype.myCall = function(objOfMy) {
    objOfMy.func = this;
    const arg = [...arguments].splice(1);
    objOfMy.func(...arg);
    delete objOfMy.func;
}

const obj = { name : 'DongShufeng'};

function sayName() {
    console.log(this.name);
}

sayName.myCall(obj);
console.log(`------------`);
sayName.call(obj);

console.log(`------TEST ABOUT SPLICE(1)-----`);
console.log([1,2,3,4,5,6,7,8,9,10].splice(1));
//  RESULT IS [2,3,4,5,6,7,8,9,10]
/*

2 首先把 `this` 赋予给我们调用的对象，给对象添加一个方法 `func` 

3 解决参数问题 创建变量 `arg` 接受 `arguments` 作为一个参数修改

4 我们调用的这个对象 obj 来执行新添加的函数 `func` 
```JavaScript
    objOfMy.func(...arg)
```

5 在运行结束之后我们删除添加给对象的这个方法

*/