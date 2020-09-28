
// 链式调用
// 存在三个函数 a b c，调用分别打印出 'a' 'b' 'c'
// 实现 a().b().c() 的调用 // 'a' 'b' 'c'

    

function a() {

    console.log('a');
    this.b = function() {
        console.log('b');
        return this;
    }

    this.c = function() {
        console.log('c');
        return this;
    }
    return this;
}

// function b() {
//     console.log('b');
//     this.a = function() {
//         console.log('a');
//         return this;
//     }

//     this.c = function() {
//         console.log('c');
//         return this;
//     }
//     console.log(this)
//     return this;
// }


a().b().c();
console.log(`-----`);
// let bTemp = b();
// console.log(bTemp);
b().c();
// b().a().c();
console.log(`-----`)
// c().a().b();