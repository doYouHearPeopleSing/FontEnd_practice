const testStr = ' WAAAA BBB CW ';

function trim(str) {
    return str.replace(/(^\s)|(\s$)/g,'');
}

function replaceSpaceAll(str) {
    return str.replace(/\s+/g,'');
}

function replaceChar(str) {
    return str.replace(/a/gi,'D');
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
console.log(Array.isArray(str.match(regexp)));