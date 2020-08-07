function f1() {
    "use strict";
    return this;
}

function f2() {
    // return this;
    console.log(this);
}

function f3() {
    return f2();
}

// console.log(f1());
console.log(f2());
// console.log(f3());