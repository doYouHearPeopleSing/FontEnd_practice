/*
 * @Author: your name
 * @Date: 2020-11-22 19:14:13
 * @LastEditTime: 2020-11-22 19:33:59
 * @LastEditors: Please set LastEditors
 * @Description: About String
 * @FilePath: \myGitHub\JSON\string.js
 */


/**
 * @description: 
 * How to get a single char
 */

 function getCharA(string,index) {
     return string[index]
 }

 function getCharB(string,index) {
     return string.charAt(index)
 }

/**
 * @description: 
 * HOW to judge a string end with other string
 */ 

 function judgeEnd(string,searchStr,length) {
    return string.endsWith(searchStr,length)
 }

 /**
  * @description: 
  * How to judge a string includes other string IN a <particular POSITION>
  */
 function judegInclude(string,targetStr) {
     return string.includes(targetStr)
 }

/**
 * @description: GET first index of a single char in a STRING 
 */ 

 function findFirstIndex(string,char) {
    return string.indexOf(char)
 }
 
 function spiltString(string, divChar) {
     return string.split(divChar)
 }
 const str = 'This Is My TestString'

 console.log(spiltString(str,' '))
 
 