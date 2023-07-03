//  Question-3:

// Write a program to convert a binary tree to a doubly linked list.

// Input:

//         10

//        /   \

//      5     20

//            /   \

//         30     35

// Output:

// 5 10 30 20 35

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function convertToDoublyLinkedList(root) {
  if (root === null) {
    return null;
  }

  let prev = null;
  let head = null;

  function inorder(node) {
    if (node === null) {
      return;
    }

    inorder(node.left);

    if (prev === null) {
      head = node;
    } else {
      prev.right = node;
      node.left = prev;
    }

    prev = node;

    inorder(node.right);
  }

  inorder(root);

  // Set the last node's right pointer to null
  prev.right = null;

  return head;
}

// Example usage:
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.right.left = new Node(30);
root.right.right = new Node(35);

const head = convertToDoublyLinkedList(root);

// Print the doubly linked list
let current = head;
while (current !== null) {
  process.stdout.write(current.value + " ");
  current = current.right;
}
