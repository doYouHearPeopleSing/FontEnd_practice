const tree = {
    data:1,
    left:{
        data:2,
        left: {
            data:4
        },
        right: {
            data:5
        }
    },
    right:{
        data:3, 
        left: {
            data:6
        },
        right: {
            data:7            
        }
    }
}



function getNodeNumber(Tree) {  
    if(Tree == undefined) {
        return 0;
    }
    let nodeNumber = 0;
     
    function loop(Tree) {
        
        const node = Tree;
        console.log(node.data);
        if(node) {
            if(node.left) {
                nodeNumber++;
                loop(node.left)
            }
            if(node.right) {
                nodeNumber++;
                loop(node.right);
            }
        }
    } 
    loop(Tree);
    return nodeNumber + 1;
}

const number = getNodeNumber(tree);
console.log(`The Number Of Tree Nodes Is:${number}`);