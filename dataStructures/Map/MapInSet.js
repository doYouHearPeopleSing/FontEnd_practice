/*
 * @Author: your name
 * @Date: 2020-08-27 10:04:37
 * @LastEditTime: 2020-11-23 18:29:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\dataStructures\Map\MapInSet.js
 */

 
let myMap = new Map()

myMap.set(1,'one').set(2,'two').set(3,'three') 

console.log(myMap.size) 
console.log(myMap) 
// myMap.clear() 
console.log(myMap) 


// for (let [key, value] of myMap) {
//     console.log(key + " = " + value) 
//   }
//   // 将会显示两个log。一个是"0 = zero"另一个是"1 = one"
  

  console.log(`--------`) 
  for (let key of myMap.keys()) {
    console.log(key) 
  }
  console.log(`--------`) 
  // 将会显示两个log。 一个是 "0" 另一个是 "1"
  
  for (let value of myMap.values()) {
    console.log(value) 
  }
  console.log(`--------`) 
  // 将会显示两个log。 一个是 "zero" 另一个是 "one"
  
  for (let [key, value] of myMap.entries()) {
    console.log(key + " = " + value) 
  }
//   // 将会显示两个log。 一个是 "0 = zero" 另一个是 "1 = one"
//   console.log(`--------`) 
//   myMap.forEach(function(value, key) {
//     console.log(key + " = " + value) 
//   })

  let first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]) 
  
  let second = new Map([
    [1, 'uno'],
    [2, 'dos']
  ]) 
  
  // 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
  // 展开运算符本质上是将Map对象转换成数组。
  let merged = new Map([...first]) 
  
//   console.log(merged.get(1))  // uno
//   console.log(merged.get(2))  // dos
//   console.log(merged.get(3))  // three

// //   merged.delete(1) 

//   console.log(merged) 
//   console.log(`****`) 

//   merged.forEach(function(value) {
//       console.log(`${value}`) 
//   }) 

console.log('+++++') 
console.log(myMap.has(2)) 
myMap.set(2,'二') 
console.log(myMap.get(2)) 