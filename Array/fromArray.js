/*
 * @Author: DongShufeng
 * @Date: 2020-11-10 11:59:20
 * @LastEditTime: 2020-11-19 17:43:37
 * @LastEditors: Please set LastEditors
 * @Description: All about array
 * @FilePath: \myGitHub\ArrayJavaScript\arrayAll.js
 */



/**
 * @description: create a new,shallow-copied Array instance from an array-like or iterable object
 * @param {*An array-like iterable object to convert to an array}
 * @return {*An array}
 */

const resArrFromString = Array.from('Dongshufeng');

const resArrFromSet = Array.from(new Set(['a','a','b','b','b','c']));

const map = new Map([[1,2],[2,4],[4,8]])
const resArrFromMap = Array.from(map);


const mapper = new Map([['1','a'],['2','b']]);

const resArrFromMapValues = Array.from(mapper.values());
const resArrFromMapKeys = Array.from(mapper.keys());

/**
 * @description: We can get an array from the function arguments
 * @param {*}
 * @return {*}
 */
function getArgArray() {
    return Array.from(arguments);
}

const argArr = getArgArray(1,2,3,4,6);


/**
 * @description:We can turn an OBJECT to an ARRAY ! 
 * BUT WE NEED:
 * 1. The key of { key : value} must be a number
 * 2. The object should have a prop called { length }
 * 3. And all key < length will be filled in the new ARRAY
 * @param {an obj*}
 * @return {an array*}
 */

const objectToArray = {
    0: 'A', 
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F', 
    length: 4 
}


console.log(Array.from(objectToArray));






 




