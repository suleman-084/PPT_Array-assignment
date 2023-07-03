//  Question-3:

// Given a Binary Tree, print the Right view of it.

// The right view of a Binary Tree is a set of nodes visible when the tree is visited from the Right side.

// **Examples:**

// **Input:**

//          1

//       /     \

//    2         3

// /   \       /  \

// 4     5   6    7

//              \

//                8

// **Output**:

// Right view of the tree is 1 3 7 8

// **Input:**

//          1

//        /

//     8

//   /

// 7

// **Output**:

// Right view of the tree is 1 8 7

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printRightView(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push({ node: root, level: 0 });

  const rightView = [];
  let currentLevel = -1;

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (level > currentLevel) {
      rightView.push(node.data);
      currentLevel = level;
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }
  }

  return rightView;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.right = new Node(8);

console.log(printRightView(root));
// Output: [1, 3, 7, 8]
