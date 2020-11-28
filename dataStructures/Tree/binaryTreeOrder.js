/*
 * @Author: your name
 * @Date: 2020-09-05 10:49:11
 * @LastEditTime: 2020-11-28 15:32:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myGitHub\dataStructures\Tree\binaryTreeOrder.js
 */
const Tree = {
    data:1,
    left:{
        data:2,
        left:{
            data:4,            
        },
        right: {
            data:5
        }
    },
    right:{
        data:3,
        left:{
            data:6
        },
        right:{
            data:7
        }
    }
}
const preList = [] 
const inList = [] 
const endList = [] 

function preOrderA(node) {
    if(node) {        
        preList.push(node.data)         
        preOrderA(node.left)         
        preOrderA(node.right) 
    }
}

/**
 * @description:
 * 前/中/后 序遍历对于每个节点的考察顺序都是一致的
 * 我们每一次遍历中输出 node.data 可以证明
 * 但是对其的存储顺序是不同的，前/中/后 的顺序区别在于：
 * 对于父节点的存储是在遍历之 前/中/后 的顺序
 * @param {*} node
 * @return {*}
 */
function inOrderA(node) {
    if(node) {
        console.log(node.data)
        inOrderA(node.left) 
        inList.push(node.data) 
        inOrderA(node.right) 
    }
}

function endOrderA(node) {
    if(node) {
        console.log(node.data)
        endOrderA(node.left)
        endOrderA(node.right)
        endList.push(node.data)
    }
}

function preOrderB(node) {
    const stack  = []
    const result = [] 

    stack.push(node)
    

    while( stack.length > 0) {  

        let current = stack.pop()

        console.log(current.data)

        result.push(current.data)

        current.right && stack.push(current.right)

        current.left && stack.push(current.left)
    }

    return result
}    

function inOrderB(node) {
    const stack  = []
    const result = []    

    while( stack.length > 0 || node ) {
        if ( node ) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            result.push(node.data)
            node = node.right
        }
    }
    return result
}

function endOrderB(node) {
    const result = []
    const stack = []

    while (node || stack.length) {
        result.unshift(node.data)
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
        node = stack.pop()
    }
    
    return result
}

const result = endOrderB(Tree)

console.log(result)


