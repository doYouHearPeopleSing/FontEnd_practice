/*
 * @Author: your name
 * @Date: 2020-11-19 15:30:47
 * @LastEditTime: 2020-11-23 17:30:11
 * @LastEditors: Please set LastEditors
 * @Description: 
 * 
 * concat方法不会改变this或任何作为参数提供的数组
 * 
 * 而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。 

   对象引用（而不是实际对象）：concat将对象引用复制到新数组中。
   
   原始数组和新数组都引用相同的对象。 

   也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的

 * @FilePath: \myGitHub\ArrayJavaScript\arrayConcat.js
 */

 const arrFirst = Array.from('ABC')

 const arrSecond = Array.from('DEF')
 
 const arrThird = Array.from('GHI')

 arrSecond.push('test')
 
 arrThird.push('J')


 /**
  * @description: 
  * 
  */
 const arrResult = arrFirst.concat(arrSecond,arrThird,1,2,3,[4,5,6]);

 console.log(arrResult);
