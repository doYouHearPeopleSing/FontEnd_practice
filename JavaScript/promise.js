/**
 * JavaScript 是单线程的语言
 */

// setTimeout(function () {
//     console.log("First");
//     setTimeout(function () {
//         console.log("Second");
//         setTimeout(function () {
//             console.log("Third");
//         }, 3000);
//     }, 4000);
// }, 1000);

/** 
 * 通过函数瀑布实现的
*/

// new Promise(
//     function (resolve, reject) {
//         setTimeout(function () {
//             console.log("First");
//             resolve();
//         }, 1000);
//     }
// ).then(
//     function () {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 console.log("Second");
//                 resolve();
//             }, 4000);
//         });
// }).then(function () {
//     setTimeout(function () {
//         console.log("Third");
//     }, 3000);
// });

new Promise(function (resolve,reject) {
    console.log('run');
})