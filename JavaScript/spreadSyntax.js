function sum(a,b,c,d,e,f) {
    console.log(arguments.length);
    console.log(arguments)
    return a+b+c+d+e+f;
}

console.log(sum(1,2,3,4,5,6));

// function restArgs(a,b,...restArgs) {
//     // console.log(a+b);
//     console.log(restArgs);
//     return a+b;
//     return restArgs;

// }

// // console(restArgs(1,2,3,4,5));

// restArgs(1,2,3,4,5);

// console.log('======');

// const numbersA = [1,1];
// const numbersB = [1,1];

// const numbersC = [1,1];

// // console.log(sum(...numbersA));

// console.log(sum(...[1,2], ...[3,4], ...[100,0]));

// // console.log(sum(...numbers));
// console.log('---------');

// const parts = ['b','c','d'];

// const newParts = ['a',...parts,'e','f'];

// console.log(newParts);

// const arr = [1,2,3];
// const arrCopy = [...arr];
// arrCopy.push(4);
// console.log(`the arr is ${arr}`);
// console.log(`the arrCopy is ${arrCopy}`);

// //test copy the array

// const testCopy = [1,2,3];
// const testCopy2 = testCopy;
// testCopy2.push(4);
// console.log(`test copy:${testCopy}`);
// console.log(`test copy:${testCopy2}`);