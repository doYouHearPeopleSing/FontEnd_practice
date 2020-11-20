/*
 * @Author: your name
 * @Date: 2020-08-06 20:25:13
 * @LastEditTime: 2020-11-20 10:24:22
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


const array = ['1','2','3'].map(parseInt)

/**
 * @description: 
 * radix Optional
    An integer between 2 and 36 that represents the radix 
    (the base in mathematical numeral systems) of the string. 
    Be careful—this does not default to 10! 
    If the radix value is not of the Number type it will be coerced to a Number
 */
console.log(array)


const arrayA = ['1','2','3']

const arrayE = arrayA.map(
    function(item,index,array) {
        return parseInt(item)
    }
)

console.log(`----`)
console.log(arrayE)
console.log(`----`)

const arrayB = arrayA.map(
    function(item) {
        return parseInt(item,10)
    }
)

const arrayC = arrayA.map(item => parseInt(item,10))
const arrayD = arrayA.map(Number)

// console.log(`-------`);
// console.log(arrayC);
// console.log(`-------`);


const arr1 = [1,2,3,4,5]

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




