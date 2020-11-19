/*
 * @Author: your name
 * @Date: 2020-09-29 14:26:20
 * @LastEditTime: 2020-11-19 18:11:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\findIndexArray.js
 */
const array1 = [200,144,130,158,1,1,1100,190,44,180];

const isLargeNumber = (Element) => Element > 150;

function isBiggerNumber (element,index,array) {
    return element > 200 && index > 3 
}

console.log(array1.findIndex(isBiggerNumber));