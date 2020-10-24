Function.prototype.myApply = function(objOfMy) {
    
    objOfMy.fn = this;
    const arg = [...arguments].splice(1)[0];
    // arg is an array for common 
   
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
console.log([1,2,3,4,5,6,7,8,9,10].splice(1)[0])
// RESULT IS 2
