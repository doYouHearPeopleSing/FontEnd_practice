const firstArray = [1,2,3];
const secondArray = firstArray.slice();
const thridArray = firstArray;

secondArray.push(4);
thridArray.push(5);

console.log(firstArray);
console.log(secondArray);
console.log(thridArray);