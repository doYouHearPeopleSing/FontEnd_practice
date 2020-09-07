const tree = {
    data: 1,
    left: {
      data: 2,
      left: {
        data: 4        
      },
      right: {
        data: 5        
      }
    },
    right: {
      data: 3,
      left: {
        data: 6        
      },
      right: {
        data: 7
      }
    }
}
const queue = [];
const output = [];
// 广度优先进行层级遍历
function bfsByRcs(tree) {
    const visitLoop = (node) => {
      if (node) {
        // console.log(`node.data is :${node.data}`);

        output.push(node.data);

        console.log(`start`);
        console.log(queue);
        console.log(`end`);

        if (node.left) {
          queue.unshift(node.left);
        }
        if (node.right) {
          queue.unshift(node.right);
        }
        visitLoop(queue.pop());
      }
    }
    visitLoop(tree);
    return output;
}

const queueRight = [];
const outputRight = [];


function bfsRight(tree) {
  function visitLoopRight(node) {
    if(node) {
      outputRight.push(node.data);

      if(node.right) {
        queueRight.unshift(node.right);
      }
  
      if(node.left) {
        queueRight.unshift(node.left);
      }
  
      visitLoopRight(queueRight.pop());

    }

  }

  visitLoopRight(tree);
  return outputRight;
}
  console.log('递归法BFS: ', bfsByRcs(tree));
  // 递归法BFS:  [ 1, 2, 3, 4, 5, 6, 7]

  console.log(`=======`);

  console.log(`Right first BFS:`,bfsRight(tree));