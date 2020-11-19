/*
 * @Author: Dongshufeng
 * @Date: 2020-09-29 11:19:03
 * @LastEditTime: 2020-11-19 16:25:45
 * @LastEditors: Please set LastEditors
 * @Description: check includes()
 * @FilePath: \myGitHub\ArrayJavaScript\includesArray.js
 */

const array = [1,2,3,4,5,6];

console.log(array.includes(2,4));

console.log(array.includes('2'));

console.log(array.includes(5));

/*
includes() can be used to judege an item in or not in an array


if includes     : TRUE;
if not includes : FALSE;

arr.includes(valueToFind[, fromIndex])

search FROM  ${fromIndex}  
*/

