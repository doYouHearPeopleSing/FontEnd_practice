// function create() {
//     const a = 100;
//     return function() {
//         console.log(a)
//     }
// }

// const fn = create();
// const a = 200;
// fn();// 100

// function print() {
//     const a = 300;
//     fn();
// }
// var a = 200;

// {
//     a = 100;
//     function fn() {
//         console.log(`===exe-fn===`);
//         a = 50;
//         console.log(a);
//     }
// }

// print();// 100

/*
自由变量的查找，是在函数定义的地方开始，向上级作用域查找，
而不是在函数被执行的地方
*/

function f1(){
    var n=999;
    function f2(){
        console.log(n);
    }    
    return f2;
}
var result=f1();
result(); // 999