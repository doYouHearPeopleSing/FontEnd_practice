/*
    给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次。

    示例 1:
    给定数组 nums = [1,1,2], 

    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

    你不需要考虑数组中超出新长度后面的元素。
    示例 2:
    给定 nums = [0,0,1,1,1,2,2,3,3,4],

    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

    你不需要考虑数组中超出新长度后面的元素。
 */

 
function removeRepeat (preArray) {
    newArray = [];
    let indexOfNew = 0;
    for( let indexOfPre = 0; indexOfPre<preArray.length; indexOfPre++ ) {
        if( !newArray.includes(preArray[indexOfPre]) ){
            newArray[indexOfNew] = preArray[indexOfPre]
            indexOfNew++;
        }
    }
    console.log(indexOfNew);
    console.log('=======');
    console.log(newArray);
}

const testArray = [0,1,1,1,1,2];
removeRepeat(testArray);