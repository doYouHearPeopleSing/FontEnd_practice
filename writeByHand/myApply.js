Function.prototype.myApply = function(objOfMy) {
    
    objOfMy.fn = this;
    const arg = [...arguments].splice(1)[0];
   
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
