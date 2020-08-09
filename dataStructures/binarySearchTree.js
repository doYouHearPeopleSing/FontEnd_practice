const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

function defaultCompare(a, b) {
    if (a === b) {
      return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

// 默认的比较函数

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    toString() {
        return `${this.key}`;
    }
}

class binarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = null;
    }
    insert(key) {
        if(this.root === null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root,key);
        }
    }
    insertNode(node,key) {
        if (this.compareFn(key,node.key) === Compare.LESS_THAN) {
            if (node.left === null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left,key);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right,key);
            }
        }
    }    

    preOrderList = [];

    preOrder(node) {
        if (node) {
            this.preOrderList.push(node.key);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrderList = [];

    inOrder(node) {
        if(node) {
            this.inOrder(node.left);
            this.inOrderList.push(node.key);
            this.inOrder(node.right);
        }
    }

    postOrderList = [];

    postOrder(node) {
        if(node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.postOrderList.push(node.key);
        }
    }

    queue = [];
    output = [];
    
        bfs(node){
            const queue = this.queue;
            const output =this.output;
            function loop(node) {
                if(node) {  
                    output.push(node.key);
                    if(node.left) {
                        queue.unshift(node.left);
                    }
                    if(node.right) {
                        queue.unshift(node.right);
                    }
                    loop(queue.pop());
                }
            }
            loop(node);
            return this.output;
        }
}





const tree = new binarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(12);

console.log(tree);

console.log(`==========`);

console.log(tree.root);

console.log(`----------`)

tree.preOrder(tree.root);
tree.inOrder(tree.root);
tree.postOrder(tree.root);
// console.log(tree.preOrder(tree.root));
// preOrder(tree);
console.log(tree.preOrderList);
console.log(tree.inOrderList);
console.log(tree.postOrderList);

console.log(`==============`);
tree.bfs(tree.root);
console.log(tree.output);