console.log(Array.from('foo'));

const str = 'This is a string'
const array1 = Array.from(str);
console.log(array1);

const array2 = array1.filter(x => x !== ' ');
console.log(`-------`)

const strNew = array2.toString();
console.log(strNew);




