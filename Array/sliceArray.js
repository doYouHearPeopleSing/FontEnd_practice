/*
 * @Author: your name
 * @Date: 2020-11-23 17:14:00
 * @LastEditTime: 2020-11-23 17:21:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\Array\sliceArray.js
 */
 /**
  * @description: 
  * splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组
  * 并以数组形式返回被修改的内容。此方法会改变原数组
  * 
  * array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
  * 
  * deleteCount 可选
    整数，表示要移除的数组元素的个数
  */
 const arrayTest = [1,2,3,4,5,6,7,8,9,10]

 arrayTest.splice(5,0,'item 6','item 7','item 8', 'item 9')

 console.log(arrayTest)
