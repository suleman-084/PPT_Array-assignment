//  Question-2:

// Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

// Example:

// Consider the following BST:

// **Input-1:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 6

// node-2 = 14

// **Output-1:**

// The distance between the two keys = 4

// **Input-2:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 3

// node-2 = 4

// **Output-2:**

// The distance between the two keys = 2

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function constructBST(values) {
  if (values.length === 0) {
    return null;
  }

  const root = new TreeNode(values[0]);

  for (let i = 1; i < values.length; i++) {
    insertNode(root, values[i]);
  }

  return root;
}

function insertNode(root, value) {
  if (value < root.value) {
    if (root.left === null) {
      root.left = new TreeNode(value);
    } else {
      insertNode(root.left, value);
    }
  } else if (value > root.value) {
    if (root.right === null) {
      root.right = new TreeNode(value);
    } else {
      insertNode(root.right, value);
    }
  }
}

function findLCA(root, node1, node2) {
  if (root === null) {
    return null;
  }

  if (root.value > node1 && root.value > node2) {
    return findLCA(root.left, node1, node2);
  } else if (root.value < node1 && root.value < node2) {
    return findLCA(root.right, node1, node2);
  } else {
    return root;
  }
}

function findDistance(root, node, distance) {
  if (root === null) {
    return -1;
  }

  if (root.value === node) {
    return distance;
  } else if (root.value > node) {
    return findDistance(root.left, node, distance + 1);
  } else {
    return findDistance(root.right, node, distance + 1);
  }
}

function findDistanceBetweenNodes(values, node1, node2) {
  const root = constructBST(values);
  const lca = findLCA(root, node1, node2);

  const distance1 = findDistance(lca, node1, 0);
  const distance2 = findDistance(lca, node2, 0);

  return distance1 + distance2;
}

// Example usage:
const values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
const node1 = 6;
const node2 = 14;

const distance = findDistanceBetweenNodes(values, node1, node2);
console.log("The distance between the two keys =", distance);
