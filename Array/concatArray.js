/*
 * @Author: your name
 * @Date: 2020-11-19 15:30:47
 * @LastEditTime: 2020-11-19 15:34:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\arrayConcat.js
 */

 const arrFirst = Array.from('ABC');
 const arrSecond = Array.from('DEF');
 const arrThird = Array.from('GHI');

 const arrResult = arrFirst.concat(arrSecond,arrThird,1,2,3,[4,5,6]);

 console.log(arrResult);
