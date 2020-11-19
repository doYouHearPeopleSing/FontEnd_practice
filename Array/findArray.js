/*
 * @Author: your name
 * @Date: 2020-09-29 11:26:03
 * @LastEditTime: 2020-11-19 18:07:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\findArray.js
 */
const arr = [7,9,3,4,5,5,1000]

const found = arr.find(item => item > 4)

console.log(found)

/**
 * @description: 
 * @param  {*}
 * @return {*this function return the FIRST item which is TRUE in the CALLBACK FUNCTION }
 */

const result = arr.find(
    function (item,index) {        
        return item > 3 && index > 2
    }
)
console.log(`------`)
console.log(result)