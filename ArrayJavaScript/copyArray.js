const arrayA = [1,2,3,4];
const arrayB = [...arrayA];  // array spreads ... 
arrayA.push(5);
console.log(arrayB);
console.log(`--------`);
console.log(arrayA)

const obj = {
    0: 'foo', 
    2: 'baz',
    5: 'Dong', 
    // length: 4 
}

obj.length = 6;

const arr = Array.from(obj);


// console.log(arr);