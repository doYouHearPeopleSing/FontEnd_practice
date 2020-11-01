/**
 * 删除字符串中出现次数大于等于 2 次，且连续的字符
    输入："abbbaca"
    输出："ca"
    解释："abbbaca" => "aaca" => "ca"
 * @param {string} 
 * @return {string}
 */


var removeDuplicates = function(s) {
    const stack = [];
    const arr = s.split('');
    for(let i = 0;i<s.length;i++) {         
         if(stack[stack.length - 1] == arr[i]) {
             
         }
         if( stack[stack.length - 1] !== arr[i]) {
             stack.push(arr[i]);
         }
    }
    return stack.toString();
 };
 
 