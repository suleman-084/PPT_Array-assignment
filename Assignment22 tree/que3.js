//  Question-3:

// Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

// Input:

//         6
//      /    \
//     3      5
//   /   \     \
//  2     5     4
//      /   \
//     7     4

// Output:

// There are 4 leaves, hence 4 root to leaf paths -
//   6->3->2
//   6->3->5->7
//   6->3->5->4
//   6->5>4

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function printRootToLeafPaths(root) {
  if (root === null) {
    return;
  }

  const stack = [];
  stack.push({ node: root, path: `${root.data}` });

  while (stack.length > 0) {
    const { node, path } = stack.pop();

    if (node.left === null && node.right === null) {
      console.log(path); // Print the path when a leaf node is reached
    }

    if (node.left !== null) {
      stack.push({ node: node.left, path: `${path}->${node.left.data}` });
    }

    if (node.right !== null) {
      stack.push({ node: node.right, path: `${path}->${node.right.data}` });
    }
  }
}

// Example usage:
const root = new Node(6);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.right = new Node(4);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

printRootToLeafPaths(root);
