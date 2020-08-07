class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }    
}

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.root = null;
        this.compareFn = compareFn;
    }
}