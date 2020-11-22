/*
 * @Author: your name
 * @Date: 2020-11-22 20:17:33
 * @LastEditTime: 2020-11-22 21:19:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\Array\flatArray.js
 */

 function myFlatA(array) {
    function myToString(array) {
        let strResult = '';
    
        for(let i = 0; i < array.length; i++) {    
            let item = array[i];       
            
            if(Array.isArray(item)) {
                strResult += myToString(item);
            }else{
                strResult += item;
            }                
        }
        
        return strResult;
    }

    let stringResult = myToString(array)
    
    const resultArray = []

    for(let i = 0;i < stringResult.length;i++) {
        resultArray.push(parseInt(stringResult[i],10))
    }

    return resultArray
 }

 function myFlatB(array) {

    const resultArr = []

    let string = array.toString()

    string = string.replace('[','')

    string = string.replace(']','')

    for(let i = 0; i < string.length; i++) {
        if(string[i] !==',') {
            resultArr.push( parseInt(string[i]) )
        }         
    }
    return resultArr
 }

 function myFlatC(array,deep) {
    return array.flat(deep)
 } 

 function myFlatD(array) {
    const resultArr = []
    
    
    function myFlatPush(array) {        

        for(let i = 0; i< array.length; i++) {
            let item = array[i]
        
            if(!Array.isArray(item)) {
                resultArr.push(item)
            }else{                
                myFlatPush(item)               
            }
        }
    }

    myFlatPush(array)

    return resultArr
}

function myFlatE(array, depth = 1) {
    return array.reduce((result, item) => {
      if (Array.isArray(item) && depth > 0) {
        result.push(...myFlatE(item, depth - 1))
      } else {
        result.push(item)
      }
      return result
    }, [])
}

const arrayTest = [1000,[ 'FUCK',[['shit'] ,[4,[5,[6]]]] ], 7,[8]]

console.log(myFlatE(arrayTest,2))

console.log(myFlatC(arrayTest,2))
 
