/*
 * @Author: your name
 * @Date: 2020-11-19 15:58:32
 * @LastEditTime: 2020-11-19 16:08:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\ArrayJavaScript\arrayEntries.js
 */


const array = ['a','b','c'];

const iterator = array.entries();


/*
This value is :
Array Iterator {}
         __proto__:Array Iterator
         next:ƒ next()
         Symbol(Symbol.toStringTag):"Array Iterator"
         __proto__:Object
*/
console.log(iterator);


/*{value: Array(2), done: false}
          done:false
          value:(2) [0, "a"]
           __proto__: Object

    next.done is true or false,to show the iteraror is end or not
    next.value === ["key","value"]

*/

console.log(iterator.next().value);

console.log(iterator.next().value);

