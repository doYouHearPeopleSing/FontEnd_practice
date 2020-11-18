
/** TRUE */
if([]) {
    console.log('[] is true');
}

/**  
 * All false  
 */

if([].length) {
    console.log('[].length is true');
}

if([] === []) {
    console.log('[] === [] is true');
}

if([] == []) {
    console.log(`[] == [] is true`);
}
if({} === {}) {
    console.log('{} === {} is true');
}

console.log([]===[]);
console.log([]==[]);
console.log([5] * [2]);
console.log(`--------`);
console.log('11' - 1);// 10
console.log(`11` + 1);// 111

console.log(`-----------------`);
const a = {};
const b = {};
console.log([] == []);
console.log({} == {});
console.log(2 === 2);
console.log(a == b);
console.log(a === b);

