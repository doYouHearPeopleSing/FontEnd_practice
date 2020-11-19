/*
 * @Author: your name
 * @Date: 2020-11-19 18:25:37
 * @LastEditTime: 2020-11-19 18:35:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\everyArray.js
 */

 /**
  * @description: 
  * THEY BOTH RETURN A BOOLEAN VALUE 
  * THEY CAN BE USED FOR JUDGING ITEMS
  */
 const belowThanNum = (item) => item < 80

 const arrayTest = [1,90,100,120]
 /**
  * MUST BE ALL
  * @description: ALL OF ITEMS RETURN TRUE,THE RESULT WILL BE TRUE
  * @param {*}
  * @return {*}
  */
 console.log(arrayTest.every(belowThanNum))



 /**
  * ONE IS OK
  * @description: ONE OF THE ITEM RETURN TRUE,THE RESULT WILL BE TRUE
  * @param {*}
  * @return {*}
  */
 console.log(arrayTest.some(belowThanNum))

