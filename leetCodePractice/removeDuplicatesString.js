/**
 * 删除字符串中出现次数大于等于 2 次，且连续的字符
    输入："abbbaca"
    输出："ca"
    解释："abbbaca" => "aaca" => "ca"
 * @param {string} 
 * @return {string}
 */

/**
 * 
 * 我目前的思路是使用一个栈来存放遍历的字符串数组
 * 
 * 但是我现在的函数得到的结果是 a,b,a,c,a
 * 把重复的 b 排除出去了，但是第一次进栈的 b 却没有被 pop
 * 我的思路是设置两个 flag 
 * 在 a(push),b(push),b(not push),b(not push),b(not push) 要进行下一步的时候，把已push 的 b pop() 出去
 * 但是尝试了几次没有成功
 * 我的问题是：该怎么设置 flag 来检测是否执行 pop() ？
 *  
 */
// var removeDuplicates = function(s) {
//     const stack = [];
//     const arr = s.split('');
//     for(let i = 0;i<s.length;i++) {         
//          if(stack[stack.length - 1] == arr[i]) {
             
//          }
//          if( stack[stack.length - 1] !== arr[i]) {
//              stack.push(arr[i]);
//          }
//     }
//     return stack.toString();
//  };
 
//  let result = removeDuplicates('abbbaca');
//  console.log(result);

 var removeDuplicatesYang = function(s) {
    const stack = [];

    s.split('').reduce((p, c, i) => {
        if(p !== c) {
            stack.push(c)
        } else if(stack[i-1] === c) {
            stack.pop()
        }
        return c
    }, '')

    const str = stack.join('')

    if(str.length == s.length) {
        return str
    }

    return removeDuplicatesYang(str)
};


// CCW:
var removeDuplicatesWang = function (s) {
  let stack = [];
  let topFlg = 0;

  let arr = s.split('');

  for (let i = 0;i < arr.length;i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
    } else {
      if (arr[i] === stack[stack.length - 1]) { // 待入栈元素与栈顶元素相等
        topFlg = 1;
      } else {
        if (topFlg == 1){
          stack.length--;
        }
        topFlg = 0;
        if (arr[i] === stack[stack.length - 1]) { // 待入栈元素与栈顶元素相等
          topFlg = 1;
        } else {
          stack.push(arr[i]);
        }
      }
    }
    console.log('stack', topFlg, stack, stack.length);
  }

  return stack.toString();

};





console.log(removeDuplicatesWang('abbbacaabdeeeeefef'));
 