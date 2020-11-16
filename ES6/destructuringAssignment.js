let [a,b,c] = [1,2,3];

console.log(a);
console.log(b);
console.log(c);

const { log } = console;
log('Hello');

const [d,e] = 'hello';

log(d);

// exchange var

let x = 1;
let y = 2;
[x,y] = [y,x];
console.log(`x equals ${x}`);
console.log(`y equals ${y}`);

// 提取 JSON 数据 
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };
  
  let { id, status, data: number } = jsonData;
  
  console.log(id, status, number[1]);
  console.log(`----------`);
  console.log(jsonData.id);