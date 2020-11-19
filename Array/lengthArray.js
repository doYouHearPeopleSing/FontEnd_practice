/*
 * @Author: your name
 * @Date: 2020-08-30 18:59:55
 * @LastEditTime: 2020-11-19 14:37:26
 * @LastEditors: Please set LastEditors
 * @Description: ARRAY.LENGTH
 * @FilePath: \myGitHub\ArrayJavaScript\arrayLength.js
 */

const array = [1,2,3,4,5,6];

/**
 * @description: We can get array.length from this style
 * @param 
 * {* 
 *    First  Value: prop of right; 
 *    Second Value: anoter name of this prop
 * }
 * @return {*}
 */

const { length : lenOfArr } = array;

console.log(lenOfArr);

/**
 * @description: We can add new item by this way:
 * @param {*}
 * @return {*}
 */

array[array.length] = 'new item';

console.log(array);
