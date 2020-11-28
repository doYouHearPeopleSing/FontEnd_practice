/*
 * @Author: your name
 * @Date: 2020-11-07 20:10:31
 * @LastEditTime: 2020-11-28 12:40:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ES6\destructuringAssignment.js
 */
let [a,b,c] = [1,2,3] 

console.log(a) 
console.log(b) 
console.log(c) 

const { log } = console 
log('Hello') 

const [d,e] = 'hello' 

log(d) 

const array = [0,1,2,3,4,5,6,7,8,9,10]

const { length : len } = array

log(`length is : ${len}`)
// exchange var

let x = 1 
let y = 2; 
[x,y] = [y,x] 
console.log(`x equals ${x}`) 
console.log(`y equals ${y}`) 

// 提取 JSON 数据 
  let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  } 
  
  let { id, status, data: number } = jsonData 
  
  console.log(id, status, number[1]) 
  console.log(`----------`) 
  console.log(jsonData.id) 