
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

const result = [];
const stack = [];

function inOrder(node) {
    let current = node;
      while (current || stack.length > 0) {
        while (current) {
          stack.push(current);
          console.log(current.data);
          current = current.left;
        }
        current = stack.pop();
        result.push(current.data);
        current = current.right;
      }
      return result;    
}

inOrder(tree);
console.log(result);