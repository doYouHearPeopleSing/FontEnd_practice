Function.prototype.myBind = function(thisArg) {
    console.log(`---\n${this}\n----`);
    
    if(typeof this !== 'function') {
        return;
    }

    const _self = this;
    const args = Array.prototype.slice.call(arguments,1);
    
    function fnBound () {
        const _this = this instanceof _self ? this : thisArg;
        return _self.apply(_this,args.concat(Array.prototype.slice.call(arguments)));
    }

    fnBound.prototype = this.prototype;
    return fnBound;
}

function foo(name,age) {
    this.name = name;
    this.age = age;
}

const bar = foo.myBind();

const alice = new bar('Alice',3);

console.log(alice.name);    // Alice
console.log(alice.age);
    
// var obj = {};
// bar('Jack');
// console.log(obj.name);  // Jack