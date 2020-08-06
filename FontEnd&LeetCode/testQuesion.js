let a = [];
let b = [];
// console.log(a+b);

let c = [1];
let d = [2];
// console.log(a+b+c+d);

var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);

var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('=========');
console.log('2' in myArr);
console.log(2 in myArr);
console.log('0' in myArr);