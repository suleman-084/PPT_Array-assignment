//  Question-2:

// Given a Binary tree, the task is to print the **left view** of the Binary Tree. The left view of a Binary Tree is a set of leftmost nodes for every level.

// **Examples:**

// ***Input:***

//             4

//           /   \

//         5     2

//              /   \

//             3     1

//            /  \

//           6    7

// ***Output:** 4 5 3 6*

// **Explanation:**

// ***Input:***

//                     1

//                   /   \

//                 2       3

//                  \

//                    4

//                      \

//                         5

//                            \

//                              6

// **Output:** 1 2 4 5 6

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printLeftView(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push({ node: root, level: 0 });

  const leftView = [];
  let currentLevel = -1;

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (level > currentLevel) {
      leftView.push(node.data);
      currentLevel = level;
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  return leftView;
}

// Example usage:
const root = new Node(4);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
root.right.right = new Node(1);
root.right.left.left = new Node(6);
root.right.left.right = new Node(7);

console.log(printLeftView(root));
// Output: [4, 5, 3, 6]
