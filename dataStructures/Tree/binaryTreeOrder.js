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
const preList = [];
const inList = [];
const endList = [];

function preOrder(node) {
    if(node) {
        console.log(`-------------------`);
        console.log(preList);
        console.log(`-------------------`);
        preList.push(node.data);
        
        preOrder(node.left);
        // console.log(`--start--`);
        // console.log(preList);
        // console.log(`--end--`)
        preOrder(node.right);
    }

}

function inOrder(node) {
    if(node) {
        inOrder(node.left);
        inList.push(node.data);
        inOrder(node.right);
    }
}

preOrder(Tree);
inOrder(Tree);
console.log(preList);       
console.log(`============`);
// console.log(inList);    