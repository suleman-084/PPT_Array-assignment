//  Question-2

// Construct the BST (Binary Search Tree) from its given level order traversal.

// Example:

// Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output: BST:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function constructBST(levelOrder) {
  if (levelOrder.length === 0) {
    return null;
  }

  // Helper function to insert a value into the BST
  function insert(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (value < root.value) {
      root.left = insert(root.left, value);
    } else if (value > root.value) {
      root.right = insert(root.right, value);
    }

    return root;
  }

  // Start constructing the BST from the root
  let root = new Node(levelOrder[0]);

  // Insert all the elements from the level order array into the BST
  for (let i = 1; i < levelOrder.length; i++) {
    root = insert(root, levelOrder[i]);
  }

  return root;
}

// Example usage:
const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBST(levelOrder);

// Function to print the BST in in-order traversal (to verify the output)
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

inOrderTraversal(root);
