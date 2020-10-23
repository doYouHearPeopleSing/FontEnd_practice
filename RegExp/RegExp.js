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
    return str.replace(/\s+/g,'');
}

function replaceChar(str) {
    return str.replace(/a/gi,'D');
    // gi 并列使用即可
}

function getIndeByRegExp(str,RegExp) {
    return str.search(RegExp);
}
/*
console.log(testStr,testStr.length);
console.log(trim(testStr),trim(testStr).length);
console.log(replaceSpace(testStr),replaceSpace(testStr).length);
*/

// const result = getIndeByRegExp('thisIsAtestAbout test', /test/g);
// console.log( result );
// console.log(typeof result);

console.log(testStr,testStr.length);
console.log(`---------------------`);
console.log(trim(testStr),trim(testStr).length);
console.log(`====================`);
console.log(replaceChar(testStr));


console.log(`++++++++`);

let str = "+7(903)-123-45-67aaaaaa19890604";

let regexp = /\d/g;

let matchResult = str.match(regexp);
console.log(matchResult);
console.log(typeof [1,2,3]);
// match returns an array of result
console.log(Array.isArray(str.match(regexp)));