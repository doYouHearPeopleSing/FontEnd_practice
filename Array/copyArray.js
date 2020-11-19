/*
 * @Author: your name
 * @Date: 2020-10-20 13:48:51
 * @LastEditTime: 2020-11-19 17:56:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\copyArray.js
 */




function copyArrayA(preArray) {
    let cloneArray = [];
    cloneArray = Array.from(preArray);
    return cloneArray;
}

function copyArrayB(preArray) {
    let cloneArray = [];
    cloneArray = [...preArray];
    return cloneArray;
}


 
const arrayA = [1,2,3,{ a:'4'}];
arrayA.push(5);

const arrayB = copyArrayA(arrayA);

arrayA[3].a = '444444';

arrayA.push(6);
arrayA.push(7);

console.log(arrayA);
console.log(arrayB);


