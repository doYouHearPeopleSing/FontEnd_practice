/*
 * @Author: your name
 * @Date: 2020-12-13 16:27:14
 * @LastEditTime: 2020-12-13 18:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\Argio\DP.js
 */

 function recurFib(n) {
     if( n < 2) {
         return n
     } else {
         return recurFib( n - 1 ) + recurFib( n - 2 )
     }
 }

 function dpFib(n) {
     const dpArray = []

     for(let i = 0; i <= n; i++) {
         dpArray.push(0)
     }

     if( n === 1 || n === 2) {
        return 1
     } else {
         dpArray[1] = 1;
         dpArray[2] = 2;

         for(let i = 3; i<= n; i++) {
             dpArray[i] = dpArray[i - 1] + dpArray[i - 2]
         }
         return dpArray[n - 1]
     }
 }

 /**
  * @description: 经典的爬楼梯问题，把爬到n楼的方法 分解为两种，差一步台阶完成 或者是 差两步台阶完成
  * @param {*} n
  * @return {*} 
  */
 function climbStairs(n) {
    const dpArray = []
    
    dpArray.push(0)
    dpArray.push(1)
    dpArray.push(2)

    for(let i = 3; i <= n; i++) {
        dpArray[i] = dpArray[i - 1] + dpArray[i - 2]
    }
    
    return dpArray[n]
 }
 console.log(climbStairs(8))