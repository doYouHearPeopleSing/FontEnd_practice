/*
 * @Author: your name
 * @Date: 2020-11-28 13:59:48
 * @LastEditTime: 2020-11-28 14:15:41
 * @LastEditors: Please set LastEditors
 * @Description: Practice about DS
 * @FilePath: \myGitHub\Practice\tree.js
 */

/**
 * @description: Binary Tree
 */ 

 const Tree = {
     data:1,

     left:{
         data:2,
         left:{
             data:4,
         },
         right:{
             data:5
         }
     },

     right: {
         data:3,
         left:{
             data:6
         },
         right:{
             data:7
         }
     }
 }

 function preOrder(Tree) {
    const preList = []

    function preLoop(node) {
        if(node) {
            preList.push(node.data)

            if(node.left) {
                preLoop(node.left)
            }
            
            if(node.right) {
                preLoop(node.right)
            }
            
        }
    }

    preLoop(Tree)
    return preList
 }

 function inOrder(Tree) {
     const inList = []

     function inLoop(node) {
         if(node) {
             inLoop(node.left)
             inList.push(node.data)
             inLoop(node.right)
         }
     }

     inLoop(Tree)
     return inList
 }

 const result = inOrder(Tree)

 console.log(result)
