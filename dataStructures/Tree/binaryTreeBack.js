/**
 * 前序遍历和中序遍历的结果还原一棵二叉树，很经典的问题
 */
function TreeNode(value) {
    this.value = value;
    this.left = this.right = null;
}

/**
 * 根据前序和中序的结果还原二叉树
 * @param {*} array1 前序遍历的序列
 * @param {*} array2 中序遍历的序列
 */

let numberOfNode = 0;
function buildTree(array1, array2){
    // console.log('=======start=========')
    if(array1.length == 0 || array2.length == 0){
        return null
    }
    // console.log(`array1:${array1}`);
    // console.log(`array2:${array2}`);
    // 1)根据前序遍历的第一个节点就是原二叉树的根节点，求得根节点是 1
    const index = array2.indexOf(array1[0]); //获取根结点索引
    // console.log(`$index is:${index}`);
   
    // 2)根据中序遍历，根节点左边就是左子树的节点，求得左树的范围 
    const leftTree = array2.slice(0, index); //左树的范围
    // console.log(leftTree);
    
    const rightTree = array2.slice(index+1); //右树的范围
    // console.log(rightTree);
    

    //新建二叉树
    var node = new TreeNode(array2[index]) //根节点以及后续迭代的各节点

    node.left = buildTree(array1.slice(1, index+1), leftTree)
    node.right = buildTree(array1.slice(index+1), rightTree);
    // console.log(node);
    return node;
}

//测试用例
// console.log('最终还原的二叉树为：',buildTree([1,2,4,5,3],[4,2,5,1,3]))
const Tree = buildTree([1,2,4,5,3],[4,2,5,1,3]);
// const Tree = buildTree([1,2,4,6,7,5,3],[6,4,7,2,5,1,3]);
console.log('=========');
// console.log(Tree);



const output = [];
const queue = [];
function bfsREC(node) {
    if(node) {
        output.push(node.value);
        if(node.left) {
            queue.unshift(node.left);
        }
        if(node.right) {
            queue.unshift(node.right);
        }
        bfsREC(queue.pop());
    }
}
bfsREC(Tree);
// console.log(output);

const preOrderList = [];
function preOrderREC(node) {
    if(node) {
        preOrderList.push(node.value);
        preOrderREC(node.left);
        preOrderREC(node.right);
    }
}
preOrderREC(Tree);

const inOrderList = [];
function inOrderREC(node) {
    if(node) {
        inOrderREC(node.left);
        inOrderList.push(node.value);
        inOrderREC(node.right);
    }
}
inOrderREC(Tree);
console.log(inOrderList);
console.log(preOrderList);
