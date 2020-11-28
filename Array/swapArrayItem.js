/*
 * @Author: your name
 * @Date: 2020-11-26 13:36:51
 * @LastEditTime: 2020-11-26 13:40:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\Array\swapArray.js
 */

 const arrayTest = [1,2,3,4,5]

 function swapA(array,indexA,indexB) {
     [array[indexA],array[indexB]] = [array[indexB],array[indexA]]
 }

 function swapB(array,indexA,indexB) {
     let temp = array[indexA]
     array[indexA] = array[indexB]
     array[indexB] = temp
 }

 swapB(arrayTest,0,1)

 console.log(arrayTest)
