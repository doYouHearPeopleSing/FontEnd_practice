const set = new Set([1,2,3,4,5]);

// add()

set.add(6);

console.log(set);

console.log(set.has(6));
console.log(set.has(7));


const iterator = set.values();
console.log(iterator);

console.log(iterator.next().value);

console.log(iterator.next().value);