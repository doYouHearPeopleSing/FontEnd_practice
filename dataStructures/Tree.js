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

    /**
     * 二叉树的遍历是指从根结点出发，按照某种次序依次访问二叉树中所有结点，使得每个结点被访问一次且仅被访问一次
     * 计算机只会处理线性序列，而我们研究遍历，就是把树中的结点变成某种意义的线性序列，这给程序的实现带来了好处
     * 
     * @memberof BinaryTree
     */
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
    /*
     * 广度优先遍历
     */
    
}
const tree = new BinaryTree();
const nodeA = new Node(1,'A');

tree.insertRootNode(nodeA);
tree.insertNodeLeft(nodeA,2,'B');
tree.insertNodeRight(nodeA,3,'C');
tree.insertNodeRight(nodeA.left,5,'E');
tree.insertNodeLeft(nodeA.left,4,'D');
tree.insertNodeRight(nodeA.right,6,'F');

// tree.insertNodeLeft(nodeA.left,4,'D');
// tree.insertNodeRight(nodeA.left,5,'E');
// tree.insertNodeRight(nodeA.right,7,'G');

// console.log(`===========`);
// tree.preOrderRec(nodeA);
// console.log(tree.preListRec);
// tree.inOrderRec(nodeA);
// console.log(tree.inListRec);
// tree.postOrderRec(nodeA);
// console.log(tree.postListRec);

// console.log(`-----------`);
// console.log(tree.bfsByRcs(tree));


    // const queue = [];
    // const output = [];
    // function bfs(node){
    //     function loop(node) {
    //         if(node) {
    //             output.push(node.value);
    //             if(node.left) {
    //                 queue.unshift(node.left);
    //             }
    //             if(node.right) {
    //                 queue.unshift(node.right);
    //             }
    //             loop(queue.pop());
    //         }
    //     }
    //     loop(node);
    //     return output;
    // }
    // bfs(nodeA);
    // console.log(`OUTPUT IS:${output}`); 

    const queueJudge = [];
    const outputJudge = [];
    let isComplete = true;
    let needJudgeIsLeaf = false;
    function bfsJudge(node){
        function loop(node) {
            if(node) {
                outputJudge.push(node.value);
                // 如果该节点有右子树而无左子树，那么铁定是非完全树，而且不需要遍历其他节点了
                if(node.left === null && node.right !== null) {
                    isComplete = false;
                    console.log(`NOT COMPLETE NODE IS:${node.value}`);
                    return;                   
                }
                // 如果该节点没有任何孩子，那么好，可以在层级遍历中，他之后的节点也不应该有孩子了，
                // 这里我们先把 needJudgeIsLeaf 设置上
                if(node.left === null && node.right === null && needJudgeIsLeaf === false) {
                    needJudgeIsLeaf = true; 
                    console.log(`JUDGE NODE IS:${node.value}`);
                }
                // 这里针对的就是，开始判断后续的节点是否有孩子，如果有，那么这个树不是完全二叉树
                if(needJudgeIsLeaf && (node.left !== null || node.right !== null)) {
                    console.log(`NOT COMPLETE NODE IS:${node.value}`);
                    isComplete = false;
                    return;
                }

                // 以下是BFS 
                if(node.left) {
                    queueJudge.unshift(node.left);
                }
                if(node.right) {
                    queueJudge.unshift(node.right);
                }
                loop(queueJudge.pop());
            }
        }
        loop(node);
        return outputJudge;
    }
    
    bfsJudge(nodeA);
    console.log(isComplete);
