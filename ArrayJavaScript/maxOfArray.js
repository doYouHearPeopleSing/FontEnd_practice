const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(Math.max.apply(null,arr));

console.log(Math.max.call(null,...arr));