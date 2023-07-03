//  Question-4:

// Write a program to connect nodes at the same level.

// Input:

//         1

//       /   \

//     2      3

//   /   \   /   \

// 4     5 6    7

// Output:

// 1 → -1

// 2 → 3

// 3 → -1

// 4 → 5

// 5 → 6

// 6 → 7

// 7 → -1

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

function connectNodesAtSameLevel(root) {
  if (root === null) {
    return;
  }

  // Create a queue for level order traversal
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const size = queue.length;

    // Process all nodes at the current level
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      // Connect the node to its next node at the same level
      if (i < size - 1) {
        node.next = queue[0];
      }

      // Enqueue the left and right children of the current node
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

connectNodesAtSameLevel(root);

// Print the connected nodes
let current = root;
while (current !== null) {
  let temp = current;
  while (temp !== null) {
    if (temp.next !== null) {
      process.stdout.write(temp.value + " → ");
    } else {
      process.stdout.write(temp.value + " → -1");
    }
    temp = temp.next;
  }
  process.stdout.write("\n");
  current = current.left;
}
