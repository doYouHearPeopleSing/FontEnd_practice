const tree = {
    data: 1,
    left: {
      data: 2,
      left: {
        data: 4, 
        left: {
          data: 8,
        },
        right: {
          data: 9
        }
      },
      right: {
        data: 5,
        left: {
          data: 10,
        },
        right: {
          data: 11
        }
      }
    },
    right: {
      data: 3,
      left: {
        data: 6,
        left: {
          data: 12
        }
      },
      right: {
        data: 7
      }
    }
}
const queue = [];
const output = [];

function bfsByRcs(tree) {
    const visitLoop = (node) => {
      if (node) {
        console.log(node.data);
        console.log(`The queue is:${queue}`);
        output.push(node.data);
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
  console.log('递归法BFS: ', bfsByRcs(tree));
  // 递归法BFS:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

  console.log(`=======`);
  console.log(queue);