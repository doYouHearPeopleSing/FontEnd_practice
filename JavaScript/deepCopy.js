/*
 * @Author: your name
 * @Date: 2020-08-06 20:25:13
 * @LastEditTime: 2020-11-20 11:30:18
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

function deepCloneB(target) {
    let resultClone = {}
    for(let key in target) {        
        resultClone[key] = target[key]
    }
    return resultClone
};

function deepCloneC(target) {
   if(typeof target === 'object') {
       let  resultClone = Array.isArray(target) ? []:{}
       for(const key in target) {
           resultClone[key] = deepCloneC(target[key])
       }
       return resultClone
   } else {
       return target
   }
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










