/*
 * @Author: your name
 * @Date: 2020-11-22 17:48:35
 * @LastEditTime: 2020-11-22 18:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\JSON\json.js
 */

 
function deepCloneA (obj) {
    return JSON.parse(JSON.stringify(obj))
}


/**
 * @description: turn An Object to A JSON String
 * @param {An Object*}
 * @return {JSON String*}
 */

function myStringify(obj) {
    return JSON.stringify(obj)
}



 /**
 * @description: JSON.parse() is used to parse JSON string TO Create An Object description BY JSON
 * @param {A JSON String *} obj
 * @return {An Object*}
 */

function myParse(obj) {
    return JSON.parse(obj)
}


const jsonString = `{"result":true,"count":42}`

const obj = {
    x:5,
    y:6
}

console.log(JSON.parse(jsonString))

console.log(typeof JSON.stringify(obj))

console.log(JSON.stringify(obj))