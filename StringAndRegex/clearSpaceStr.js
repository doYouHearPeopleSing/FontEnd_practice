/*
 * @Author: your name
 * @Date: 2020-11-19 16:20:20
 * @LastEditTime: 2020-11-22 17:19:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\String\clearSpaceStr.js
 */

str = '    This is a   string   ';

function myFormatSpace(string) {
    return string.split(' ').filter(element => (element !== '')).join(' ')
}

function myClearAllSpaceA(string) {
    return string.replace(
        /(\s)/g,

        function(all,char) {
            return ''
        }
    )
}

function myClearAllSpaceB(string) {
    return string.split(' ').filter(element => (element !== '')).join('')
}

 /**
  * @description: 
  * Init a function myTrim() BY using Reg
  * HOW?
  * ^   匹配输入的开始。如果多行标志被设置为 true，那么也匹配换行符后紧跟的位置

        例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'
     
    $   匹配输入的结束。如果多行标志被设置为 true，那么也匹配换行符前的位置

        例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'

    +   匹配前面一个表达式 1 次或者多次。等价于 {1,}。

        例如，/a+/ 会匹配 "candy" 中的 'a' 和 "caaaaaaandy" 中所有的 'a'，但是在 "cndy" 中不会匹配任何内容

    	
    x|y 匹配‘x’或者‘y’

        例如，/green|red/匹配“green apple”中的‘green’和“red apple”中的‘red’
  * 
  */ 

function myTrimA(string) {
    return string.replace(/^\s+|\s+$/g,'')
}


 
let result = myTrimA(str)

console.log(myTrimA(str))

console.log(result.length)