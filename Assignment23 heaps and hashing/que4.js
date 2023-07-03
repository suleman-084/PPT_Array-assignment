//  Question-4:

// Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

// **Examples:**

// **Input:**

//              20

//            /     \

//         8         22

//     /      \         \

// 5         3        25

//         /    \

//    10       14

// **Output:** 5, 10, 3, 14, 25.

// **Input:**

//              20

//            /     \

//         8         22

//     /      \      /   \

//  5         3    4     25

//          /    \

//      10       14

// **Output:**

// 5 10 4 14 25.

// **Explanation:**

// If there are multiple bottom-most nodes for a horizontal distance from the root, then print the later one in the level traversal.

// **3 and 4** are both the bottom-most nodes at a horizontal distance of 0, we need to print 4.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.horizontalDistance = 0;
  }
}

function printBottomView(root) {
  if (root === null) {
    return [];
  }

  const queue = [];
  const map = {};

  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();
    const horizontalDistance = node.horizontalDistance;

    map[horizontalDistance] = node.data;

    if (node.left !== null) {
      node.left.horizontalDistance = horizontalDistance - 1;
      queue.push(node.left);
    }

    if (node.right !== null) {
      node.right.horizontalDistance = horizontalDistance + 1;
      queue.push(node.right);
    }
  }

  return Object.values(map);
}

// Example usage:
const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

console.log(printBottomView(root));
// Output: [5, 10, 3, 14, 25]
