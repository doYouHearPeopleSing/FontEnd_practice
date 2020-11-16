const arr = [1,2,3,3,3,4,5,6,6,6,'1'];

// ES6 
function removeD1(array) {
    return [...(new Set(array))];
}

function removeD2(array) {
    return Array.from(new Set(array));
}

// FOR(;;)

function removeD3(array) {
    const { length:len } = array;

    for(let i = 0;i<len;i++) {
        for(let j = i+1;j<len;j++) {
            if(array[i] === array[j]) {
                delete array[j];
            }
        }
    }

    return array;
}

function removeD4(array) {
    const { length: len } = array;

    const result = [];
    result.push(array[0]);

    for(let i = 1;i< len;i++) {
        if(!result.includes(array[i])) {
            result.push(array[i])
        }
    }

    return result;
}

const result = removeD1(arr);

console.log(result,result instanceof Array);

console.log(result.length);