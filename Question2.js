/*
 * @Author: your name
 * @Date: 2020-08-06 20:25:13
 * @LastEditTime: 2020-11-23 18:09:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\dataStructures\testQuesion.js
 */


let a = []  
let b = []  
console.log(a+b)  

let c = [1]  
let d = [2]  
console.log(a+b+c+d+[3]+[4,5])  

var x = 0  
function foo() {
    x = x + 1
    this.x = x  
    return foo  
}
var bar = new new foo  

console.log(`bar.x is:${bar.x}`)  

var myArr = ['foo', 'bar', 'baz']  
myArr[2]  
console.log('=========')  
console.log('2' in myArr)  
console.log(2 in myArr)  
console.log('0' in myArr)  