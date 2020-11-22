/*
 * @Author: your name
 * @Date: 2020-11-22 19:55:44
 * @LastEditTime: 2020-11-22 20:02:57
 * @LastEditors: Please set LastEditors
 * @Description: for ... in / for ... of
 * @FilePath: \myGitHub\Array\forOfArray.js
 */

 const arrayTest = [1,2,3,4,5,6,7,8]

 arrayTest.name = 'My Test ARRAY'
 Array.prototype.getLength = function() {
     return this.length
 }
 /**
  * @description: 
  * for of 遍历数组内的项
  * 
  * for in 遍历的是数组项的索引
  */
 function forOf(array) {
    for(let item of array) {
        console.log(item)
    }
 }
 
 function forIn(array) {
    for(let key in array) {
        console.log(arrayTest[key])
    }
 }

 forIn(arrayTest)
 
