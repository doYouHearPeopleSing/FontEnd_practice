{
    let a = 1;
    let b = 2;
    var c = 3;
    console.log(a);
}
// console.log(b); b is not defined
console.log(c);

// how to use let and var

var arrayTest = [];
for (var i = 0; i<10; i++) {
    arrayTest[i] = function() {
        console.log(i);
    }
}
console.log(arrayTest);
arrayTest[0]();

for (var j = 0; j<10; j++) {
    arrayTest[j]();
}

console.log('==========');
var arrayTestLet = [];
for (let i = 0; i<10; i++) {
    arrayTestLet[i] = function() {
        console.log(i);
    }
}
// arrayTestLet[5]();
for (let i = 0; i<10; i++) {
    arrayTestLet[i]();
}

// 变量提升是什么意思？

console.log(foo);
var foo = 3;

