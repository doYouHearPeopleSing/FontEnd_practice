const tree = {
    data:1,
    left:{
        data:2,
        left: {
            data:4,
            left: {data : 8},
            right: {data : 9}
        },
        right: {
            data:5
        }
    },
    right:{
        data:3, 
        // left: {
        //     data:6
        // },
        // right: {
        //     data:7            
        // }
    }
}

function maxDeepth(node) {
    if(!node) {return 0;}

    if(node) {
        let left=maxDeepth(node.left);
        let right=maxDeepth(node.right);
        return ( (left > right) ? left : right )+1;        
    }
}

const deepMax = maxDeepth(tree);
console.log(`DeepMax Is:${deepMax}`);

function minDepth (root) {
    if(!root){
        return 0
    }
    if(root.right==null&&root.left==null){
        return 1
    }
    if (root.left&&!root.right){
        return 1+minDepth(root.left);
    }
    if (!root.left&&root.right){
        return 1+minDepth(root.right);
    }
    return 1+Math.min(minDepth(root.left),minDepth(root.right)) //存在两个字节点

};

const minDeep = minDepth(tree);
console.log(`Min Deep Is:${minDeep}`);
