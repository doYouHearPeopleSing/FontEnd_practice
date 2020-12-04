/*
 * @Author: your name
 * @Date: 2020-11-08 13:44:51
 * @LastEditTime: 2020-12-04 17:09:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\leetCodePractice\removeDuplicatesArray.js
 */
const arr = [1,2,3,3,3,4,4,4,4,5,6,6,6,7,7,7,8]

// ES6 
function removeD1(array) {
    return [...(new Set(array))]
}

function removeD2(array) {
    return Array.from(new Set(array))
}

// FOR(;;)

function removeD3(array) {
    const { length:len } = array

    for(let i = 0;i<len;i++) {
        for(let j = i+1;j<len;j++) {
            if(array[i] === array[j]) {
                delete array[j]
            }
        }
    }

    return array
}

function removeD4(array) {
    const { length: len } = array

    const result = []
    result.push(array[0])

    for(let i = 1;i< len;i++) {
        if(!result.includes(array[i])) {
            result.push(array[i])
        }
    }

    return result
}

function removeD5(array) {
    
    // const result = [...array]

    const result = array.concat()
    
    result.sort( (a,b)=> a - b )

    let i = 0

    for(let j = 1; j < result.length; j++){

        if(result[i] != result[j]){
            i++
            result[i] = result[j]
        }
    }
    
    return result.splice(0 , i+1);
};

const result = removeD5(arr)


console.log(result)
console.log(`----------`)
console.log(arr)