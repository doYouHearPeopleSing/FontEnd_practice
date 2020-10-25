/***  
 * 博物馆中有一组古老的数字牌，一天夜里，这些数字牌突然复活并计划大逃亡
 * 在它们历尽千辛万苦逃出博物馆后，发现有一枚数字牌掉队了
 * 如果这些数字牌是从0开始的、一组连续的整数，请你帮它们找出掉队的那个数字
 * 
 *  样例输入
    [0，4，2，1，5]
    样例输出
    3
*/

function solution(array) {
    const lenOfArr = array.length;
    for(let i = 0;i <= lenOfArr;i++) {
        if(array.indexOf(i) === -1) {
            return i;
        }
    }
}

const result = solution([0,4,2,1,5]);
console.log(result)