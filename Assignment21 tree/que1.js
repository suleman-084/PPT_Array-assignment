//  Question-1

// You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

// Input:

//         10

//        /   \

//      2      7

//    /   \

//  8      4

// Output:

//         8

//       /   \

//     4     10

//   /   \

// 2      7

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node, values) {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left, values);
  values.push(node.value);
  inOrderTraversal(node.right, values);
}

function constructBST(values) {
  if (values.length === 0) {
    return null;
  }

  const mid = Math.floor(values.length / 2);

  const root = new TreeNode(values[mid]);
  root.left = constructBST(values.slice(0, mid));
  root.right = constructBST(values.slice(mid + 1));

  return root;
}

function convertToBST(root) {
  const values = [];

  inOrderTraversal(root, values);

  values.sort((a, b) => a - b);

  return constructBST(values);
}

// Example usage:
const binaryTree = new TreeNode(10);
binaryTree.left = new TreeNode(2);
binaryTree.right = new TreeNode(7);
binaryTree.left.left = new TreeNode(8);
binaryTree.left.right = new TreeNode(4);

const bst = convertToBST(binaryTree);

// Function to perform in-order traversal on BST
function inOrderTraversalBST(node) {
  if (node === null) {
    return;
  }

  inOrderTraversalBST(node.left);
  console.log(node.value);
  inOrderTraversalBST(node.right);
}

inOrderTraversalBST(bst);
