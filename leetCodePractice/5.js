/** 
 * 某公司一行人前往外地考察调研，按公司出差规定要求大家住双人标准间。
 * 行政助理在分配房间时发现，
 * 这组人的数量为单数，有一个人无法住标准间。
 * 如果将这组人按所住房间编号，请你找出单独居住的人的编号。
 * 
 *  样例输入
    [1,1,2]

    样例输出
    2

 * 
 * 
*/
function solution(array) {
    for(let i = 0;i<array.length;i++) {
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            return array[i]
        }
    }
}

const result = solution([1,1,2]);
console.log(result);