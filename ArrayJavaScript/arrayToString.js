/**
 * Array to String
 */

// toString()

const arr1 = [1,2,3,4,5,6,7];
const arr2 = [1,[2,3],[4,[5,6]]];
const str1 = arr1.toString();
const str2 = arr2.toString();
// console.log(str2,typeof str2);

// join()

const arr3 = [1,2,3,[4,5],[6,7,[8,9]]];
const str3 = arr3.join();
console.log(str3,typeof str3);
console.log(str3[1])

// String to Array

const str4 = '1=2=3=4=5=6';
const arr4 = str4.split('=');
console.log(arr4)

// 去除字符串空格的方法

const str5 = 'This   is a      String';
const result = str5.split(' ').join('');
console.log(`++++++++`);
console.log(result);

const strNew = ' this is a str for        example  !'
strNew.trim();
const strResult = strNew.replace(/  /g,'');
console.log(`==========`)
console.log(strResult);

const str6 = 'this is a string';
const arr6 = str6.split(' ');
console.log(arr6);