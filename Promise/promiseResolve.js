/**
 * Promise.resolve(value)方法
 * 返回一个以给定值解析后的Promise 对象
 * 如果这个值是一个 promise ，那么将返回这个 promise 
 * 如果这个值是thenable（即带有"then" 方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态
 * 否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平
 */

const promise1 = Promise.resolve(123);

promise1.then((value) => {
    console.log(value);
})


// 使用静态 Promise.resolve 方法
Promise.resolve("Success").then(function(value) {
    console.log(value); // "Success"
  }, function(value) {
    // 不会被调用
    console.log(1111);
  });



// resolve 一个数组
const promise2 = Promise.resolve([1,2,3]);

promise2.then(function(value) {
    console.log(value[0]);
})

console.log('Promise is after the main queue')