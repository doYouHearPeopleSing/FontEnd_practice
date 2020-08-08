class Node {
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }    
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insertRootNode(rootNode) {
        this.root = rootNode;
    }
    insertNodeLeft(parentNode,key,value) {
        const node = new Node(key,value);
        if(parentNode.left == null) {
            parentNode.left = node;
        }
    }
    insertNodeRight(parentNode,key,value) {
        const node = new Node(key,value);
        if(parentNode.right == null) {
            parentNode.right = node;
        }
    }
    preListRec = []; //定义保存先序遍历结果的数组
    preOrderRec(node) {
        if (node) { //判断二叉树是否为空
            this.preListRec.push(node.value); //将结点的值存入数组中
            this.preOrderRec(node.left); //递归遍历左子树
            this.preOrderRec(node.right); //递归遍历右子树
        }
    }

    inListRec = []; //定义保存中序遍历结果的数组
    inOrderRec(node) {
        if (node) { //判断二叉树是否为空
            this.inOrderRec(node.left); //递归遍历左子树
            this.inListRec.push(node.value); //将结点的值存入数组中
            this.inOrderRec(node.right); //递归遍历右子树
        }
    }

    postListRec = []; //定义保存后序遍历结果的数组
    postOrderRec = function(node) {
        if (node) { //判断二叉树是否为空
            this.postOrderRec(node.left); //递归遍历左子树
            this.postOrderRec(node.right); //递归遍历右子树
            this.postListRec.push(node.value); //将结点的值存入数组中
        }
    }
}
const tree = new BinaryTree();
const nodeA = new Node(1,'A');

tree.insertRootNode(nodeA);
tree.insertNodeLeft(nodeA,2,'B');
tree.insertNodeRight(nodeA,3,'C');

tree.insertNodeLeft(nodeA.left,4,'D');
tree.insertNodeRight(nodeA.left,5,'E');

console.log(`===========`);
tree.preOrderRec(nodeA);
console.log(tree.preListRec);
tree.inOrderRec(nodeA);
console.log(tree.inListRec);
tree.postOrderRec(nodeA);
console.log(tree.postListRec)
