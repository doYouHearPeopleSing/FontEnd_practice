/*
 * @Author: your name
 * @Date: 2020-08-06 20:25:13
 * @LastEditTime: 2020-11-19 18:55:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\Array\mapArray1.js
 */

/**
 * @description: 
 * The map() method creates a new array populated with the results of 
 * calling a provided function on every element in the calling array.
 * @param {*}
 * @return {*}
 */


// 我们关于map 的用法知之甚少！
const array = ['1','2','3'].map(parseInt);
// [1,NaN,NaN]


console.log(array);


const arrayA = ['1','2','3'];

const arrayE = arrayA.map(
    function(item,index,array) {
        return parseInt(item);
    }
)

console.log(`----`);
console.log(arrayE);
console.log(`----`);

const arrayB = arrayA.map(
    function(item) {
        return parseInt(item,10);
    }
)

const arrayC = arrayA.map(item => parseInt(item,10));
const arrayD = arrayA.map(Number);

// console.log(`-------`);
// console.log(arrayC);
// console.log(`-------`);


const arr1 = [1,2,3,4,5];
const arr2 = arr1.map(
    function(item,index,array) {
        if(index % 2 === 0) {
            return item = item +10;
        }else{
            return item = item*2;
        }
    }
)

// console.log(arr1);
// console.log(arr2);




