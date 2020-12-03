/*
 * @Author: your name
 * @Date: 2020-12-03 16:11:45
 * @LastEditTime: 2020-12-03 16:28:39
 * @LastEditors: Please set LastEditors
 * @Description: My instance of
 * @FilePath: \myGitHub\writeByHand\myInstanceOf.js
 */

function myInstanceOf(left, right) {
    
    let leftValue = left.__proto__
    let rightValue = right.prototype

    while (true) {
      if (leftValue === null) {
        return false
      }
      if (leftValue === rightValue) {
        return true
      }
      leftValue = leftValue.__proto__
    }
}

let result = myInstanceOf( [1,2,3] , Object )

console.log(result)
