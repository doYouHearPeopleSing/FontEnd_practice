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