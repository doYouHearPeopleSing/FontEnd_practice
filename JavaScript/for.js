const array = ['A','B','C','D','E'];
array.forEach(function(item,index,array) {
    console.log(item);
    console.log(index);
    console.log(`--`);
    // console.log(item);
})

const stack = [];
for(index in array) {
    // console.log(array[item]);
    stack.push(array[index]);
}
console.log(`==`);
console.log(stack);
console.log(`==`)

for(ele of array) {
    console.log(array[ele]); // undefined
}

var arr = [{name:'bb'},5,'test']
for (item of arr) {
    console.log(item)
}