/*
 * @Author: your name
 * @Date: 2020-08-06 20:25:13
 * @LastEditTime: 2020-11-23 17:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\JavaScript\deepCopy.js
 */


const objOrign = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        array: [1,2,3],
        child2: {
            child2_1: 'child_2_1'
        }
    },
    field5: function(){
        return 1;
    }
}

function show(objOrign,objCopy) {
    console.log('---START---')
    console.log(objOrign)
    console.log('=========== COPY IS: ===========')
    console.log(objCopy);
    console.log('---END---')
}

function deepCloneA (obj) {
    return JSON.parse(JSON.stringify(obj))
}


const objCopy = deepCloneA(objOrign)

/**
 * @description: 
 * CHANGE HAPPENED AFTER CLONE!
 */

objCopy.field4.child2.child2_1 = 'testDeepClone'
objCopy.field1 = 5000
objCopy.field4.array.push(4)
objCopy.field4.array.push(5)

show(objOrign,objCopy)

console.log(typeof objCopy)

/**
 * @description: 
 * COPY AN ARRAY
 */
console.log(`-------------------------------------NEXT------------------------------------------`)
const arrOr = [1,2,3,4,{ id:5}]
const arrCo = deepCloneA(arrOr)

arrOr.push(6)
arrCo[4].id = 'fuckYou'
show(arrOr,arrCo)


console.log(typeof arrCo)










