/*
 * @Author: your name
 * @Date: 2020-09-29 14:53:30
 * @LastEditTime: 2020-11-19 18:13:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\filterArray.js
 */
const numbers = [1,2,3,4,5,6,7,8,9,10] 

const result = numbers.filter(item => item > 3) 

console.log(result) 

const callResult = function(element,index) {
    return element >2 && index > 5 
}

console.log(numbers.filter(callResult)) 

console.log(numbers)