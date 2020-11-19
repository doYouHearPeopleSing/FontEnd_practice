/*
 * @Author: your name
 * @Date: 2020-11-19 16:20:20
 * @LastEditTime: 2020-11-19 16:20:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\String\clearSpaceStr.js
 */
str = '    This is a       string   ';
const strNew = str.split(' ').filter(element =>(element !== '')).join(' ');

console.log(strNew);
console.log(strNew.length);

/**
 * 通过这个方法我们可以把词与词之间有任意长度空格的字符串
 * 转换为 词与词之间间隔一个 space 的句子 句首句尾无 space 
 */