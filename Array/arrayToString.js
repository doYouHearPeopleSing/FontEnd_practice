/*
 * @Author: your name
 * @Date: 2020-09-29 15:55:23
 * @LastEditTime: 2020-11-22 20:17:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\arrayToString.js
 */


/**
 * @description: Change an array to a string
 * @param {*array}
 * @return {*string}
 */

function myToStringA(array) {
    return array.toString().replace(/,/g , '');
}

function myToStringB(array) {
    return array.join().replace(/,/g , '');
}

function myToStringC(array) {
    let strResult = '';

    for(let i = 0; i < array.length; i++) {    
        let item = array[i];       
        
        if(Array.isArray(item)) {
            strResult += myToStringC(item);
        }else{
            strResult += item;
        }                
    }
    
    return strResult;
}

const str = myToStringC(   [1,[ 2,[3 ,[4,[5,[6]]]] ], 7,[8]]  );

console.log(str);
console.log(typeof str);




/**
 * @description: 
 * @param {*a string might be regular}
 * @return {*an array}
 */

 function myToArrayA( string , symbol ) {
     return string.split(symbol);
 }

 function myToArrayB(string) {
     const resultArr = [];
     for(let i = 0; i < string.length;i++) {
        let item = string[i]
        if(parseInt(item) !== NaN) {        
            item = parseInt(item,10);
        }
        resultArr.push(item);
     }
     return resultArr;
 }




