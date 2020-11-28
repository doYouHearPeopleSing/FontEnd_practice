/*
 * @Author: your name
 * @Date: 2020-11-19 19:01:48
 * @LastEditTime: 2020-11-28 13:45:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\Array\reduceArray.js
 */

 /**
  * @description: 
  * @param {
  * 1. accumulator 累计器
  * 2. currentValue 当前值
  * 3. currentIndex 当前索引
  * 4. array 数组 
  * *}
  * @return {*}
  */
 const arrayTest =  [4, 5, 6, 7, 8]
 
 const sumOfArray = arrayTest.reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
 })

 console.log(sumOfArray)

/**
 * @description: 
 * Using reduce() to flat an Array
 */ 

function myFlatByReduce(array, depth = 1) {
   return array.reduce(

   (result, item) => {
     if (Array.isArray(item) && depth > 0) {
       result.push(...myFlatByReduce(item, depth - 1))
     } else {
       result.push(item)
     }
     return result
   }, 
   
   []
   // InitialValue
   )
}






