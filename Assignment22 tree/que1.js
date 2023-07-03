//  Question-1:

// Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function convertToDLL(root) {
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

  return head;
}

// Example usage:
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

const dllHead = convertToDLL(root);

// Print the doubly linked list
let current = dllHead;
while (current !== null) {
  console.log(current.data);
  current = current.right;
}
