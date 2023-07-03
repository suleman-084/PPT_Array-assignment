//  Question-1

// Given a binary tree, your task is to find subtree with maximum sum in tree.

// Examples:

// Input1 :

//        1

//      /   \

//    2      3

//   / \    / \

// 4   5  6   7

// Output1 : 28

// As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

// Input2 :

//        1

//      /    \

//   -2      3

//   / \    /  \

// 4   5  -6   2

// Output2 : 7

// Subtree with largest sum is :

//  -2

//  / \

// 4   5

// Also, entire tree sum is also 7.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxSubtreeSum(root) {
  if (root === null) {
    return 0;
  }

  // Variables to track maximum sum and subtree sum
  let maxSum = -Infinity;
  let subtreeSum = 0;

  function traverse(node) {
    if (node === null) {
      return 0;
    }

    // Calculate the sum of the left and right subtrees
    const leftSum = traverse(node.left);
    const rightSum = traverse(node.right);

    // Calculate the sum of the current subtree
    subtreeSum = node.value + leftSum + rightSum;

    // Update the maximum sum if the current subtree has a larger sum
    maxSum = Math.max(maxSum, subtreeSum);

    // Return the sum of the current subtree
    return subtreeSum;
  }

  traverse(root);

  return maxSum;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const maxSubtreeSum = findMaxSubtreeSum(root);
console.log("Maximum sum subtree:", maxSubtreeSum);
