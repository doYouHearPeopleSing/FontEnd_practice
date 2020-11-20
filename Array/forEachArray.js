/*
 * @Author: your name
 * @Date: 2020-11-20 10:26:55
 * @LastEditTime: 2020-11-20 10:34:52
 * @LastEditors: Please set LastEditors
 * @Description: Array.prototpye.forEach()
 * @FilePath: \myGitHub\Array\forEachArray.js
 */

 /**
  * @description: forEach WILL NOT return an new array 
  * get all element by ORDER
  * @param {element,index,array*}
  * @return {nothing*}
  */
 const arrayTest = [1,2,3,4,5,6]

 const newArray = arrayTest.forEach((element,index,array) => {
    element = element + 3
    console.log(element)
 })

 console.log(arrayTest)

