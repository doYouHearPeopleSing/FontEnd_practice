const map = new Map();

map.set(10,'this is 10');
map.set(20,'this is 20');
map.set(30,'this is 30');



console.log(map.size)

const valueOf10 = map.get(10);
console.log(valueOf10);

console.log(map.has(30));

for(let [key,value] of map) {
    console.log(key + " : " + value);
}