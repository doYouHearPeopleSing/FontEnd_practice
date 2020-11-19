/*
 * @Author: your name
 * @Date: 2020-11-19 15:39:34
 * @LastEditTime: 2020-11-19 18:49:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\arrayCopyWithin.js
 */


 /**
  * @description:   
  * Adjust the array in where it was
  * Add items in other position to the new position in THE SAME ARRAY
  * @param {*
  * 1. the index which will ADD to
  * 2. the copy content where START
  * 3. the copy content where END - 1
  * }
  * @return {*}
  */
 const arrayTest = Array.from('012345678');

 arrayTest.copyWithin(0,5,8);

 console.log(arrayTest);