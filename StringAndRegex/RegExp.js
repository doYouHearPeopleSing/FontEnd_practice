const testStr = ' WAAAA BBB CW ';
/**
 * trim(str) 清除字符串开头和结尾的空格
 * replaceSpaceAll(str) 清除字符串中所有的空格
 * 
 *
 * @param {*} str
 * @returns
 */
function trim(str) {
    return str.replace(/(^\s)|(\s$)/g,'');
    // 开头 ^ 结尾 $
}

function replaceSpaceAll(str) {
    return str.replace(/\s/g,'');
}

function replaceChar(str) {
    return str.replace(/a/gi,'D');
    // gi 并列使用即可
}

function getIndeByRegExp(str,RegExp) {
    return str.search(RegExp);
}

console.log(testStr,testStr.length);
// console.log(trim(testStr),trim(testStr).length);
console.log(replaceSpaceAll(testStr),replaceSpaceAll(testStr).length);

// const result = getIndeByRegExp('thisIsAtestAbout test', /test/g);
// console.log( result );
// console.log(typeof result);

// console.log(testStr,testStr.length);
// console.log(`---------------------`);
// console.log(trim(testStr),trim(testStr).length);
// console.log(`====================`);
// console.log(replaceChar(testStr));


// console.log(`++++++++`);

// let str = "+7(903)-123-45-67aaaaaa19890604";

// let regexp = /\d/g;

// let matchResult = str.match(regexp);
// console.log(matchResult);
// console.log(typeof [1,2,3]);
// // match returns an array of result
// console.log(Array.isArray(str.match(regexp)));

console.log(`-------------`);
const patt = /test/gi;

// const isTest = patt.test('this is a test about e');

// console.log(isTest);
// console.log('this is a test about e'.match(patt));
const strMatch = 'this is a test Test test';
const matchArray = strMatch.match(patt);
console.log(matchArray);
/**
 * 
如果使用`g`标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
如果未使用`g`标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 
未使用`g`标志的情况下，返回的项目将具有如下所述的其他属性。
 */

console.log(`=========`)


var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
