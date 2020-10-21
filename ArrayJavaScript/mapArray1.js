

// 我们关于map 的用法知之甚少！
const array = ['1','2','3'].map(parseInt);
// [1,NaN,NaN]
console.log(array);


const arrayA = ['1','2','3'];

const arrayE = arrayA.map(
    function(item,index,array) {
        return parseInt(item);
    }
)

console.log(`----`);
console.log(arrayE);
console.log(`----`);

const arrayB = arrayA.map(
    function(item) {
        return parseInt(item,10);
    }
)

const arrayC = arrayA.map(item => parseInt(item,10));
const arrayD = arrayA.map(Number);

// console.log(`-------`);
// console.log(arrayC);
// console.log(`-------`);


const arr1 = [1,2,3,4,5];
const arr2 = arr1.map(
    function(item,index,array) {
        if(index % 2 === 0) {
            return item = item +10;
        }else{
            return item = item*2;
        }
    }
)

// console.log(arr1);
// console.log(arr2);




