//  Question-2

// A Given a binary tree, the task is to flip the binary tree towards the right direction that is clockwise. See the below examples to see the transformation.

// In the flip operation, the leftmost node becomes the root of the flipped tree and its parent becomes its right child and the right sibling becomes its left child and the same should be done for all left most nodes recursively.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function flipBinaryTree(root) {
  if (root === null || (root.left === null && root.right === null)) {
    return root;
  }

  // Recursively flip the left and right subtrees
  const flippedLeft = flipBinaryTree(root.left);
  const flippedRight = flipBinaryTree(root.right);

  // Swap the left and right children of the current node
  root.left = flippedRight;
  root.right = flippedLeft;

  return root;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const flippedTree = flipBinaryTree(root);

// Print the flipped binary tree
function printTreeInorder(node) {
  if (node === null) {
    return;
  }

  printTreeInorder(node.left);
  console.log(node.data);
  printTreeInorder(node.right);
}

printTreeInorder(flippedTree);
