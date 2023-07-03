{
  /* <aside>
💡 **Question 3**

Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

**Example 1:**
Input:
LinkedList: 1->2->2->4->5->6->7->8
K = 4
Output:4 2 2 1 8 7 6 5
Explanation:
The first 4 elements 1,2,2,4 are reversed first
and then the next 4 elements 5,6,7,8. Hence, the
resultant linked list is 4->2->2->1->8->7->6->5.

</aside> */
}

// Node class to define a linked list node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to reverse every k nodes in a linked list
function reverseKNodes(head, k) {
  let current = head;
  let prev = null;
  let next = null;
  let count = 0;

  // Reverse the first k nodes
  while (current && count < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  // If there are more nodes remaining, recursively reverse the next k nodes
  if (next) {
    head.next = reverseKNodes(next, k);
  }

  return prev; // Return the new head of the reversed sublist
}

// Utility function to print the linked list
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + " ";
    current = current.next;
  }

  console.log(result);
}

// Create the linked list: 1->2->2->4->5->6->7->8
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

let k = 4; // Number of nodes to reverse

// Reverse every k nodes in the linked list
head = reverseKNodes(head, k);

// Print the modified linked list
printList(head);
