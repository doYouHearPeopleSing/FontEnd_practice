// `apply()`方法接受的是一个参数数组

Function.prototype.myApply = function(objOfMy) {
    
    objOfMy.fn = this;
    const arg = [...arguments].splice(1)[0];
    // arg is an array for common 
    // splice() 返回由被删除的元素组成的一个数组
    // 如果只删除了一个元素，则返回只包含一个元素的数组
    // 如果没有删除元素，则返回空数组。
   
    if(!Array.isArray(arg) && arg !== undefined) {
        throw new Error('must be an array');
    }

    objOfMy.fn(arg);
    
    delete objOfMy.fn;
}

const obj = { name : 'Dong' };

function sayName() {
    console.log(this.name);
}

sayName.myApply(obj);
console.log(`------------------`);
sayName.apply(obj);
console.log(`TEST ABOUT APLICE(1)[0]`);
console.log([1, [100,101,102] ,3,4,5,6,7,8,9,10].splice(1)[0])
// RESULT IS 2
