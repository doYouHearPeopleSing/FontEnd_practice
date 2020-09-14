// console.log(typeof 1);
// console.log(typeof new String());
// console.log(typeof null);
// console.log(typeof new Date());
const Dong = 'Dongshufeng';
const Xi = new String('XiJingping');
console.log(typeof Dong);
console.log(`--INSTANCE-OF--`);
console.log(Xi instanceof String);
function Person(){};
const result = new Person() instanceof Person;
// console.log(result);
const type = Object.prototype.toString.call(Symbol());
console.log(type);

console.log(`===========`);
console.log((3).constructor);