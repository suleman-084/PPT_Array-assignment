{
  /* <aside>
💡 **Question 8**

Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

**Example 1:**

```
Input:
LinkedList = 1 <--> 3 <--> 4
x = 3
Output:1 3
Explanation:After deleting the node at
position 3 (position starts from 1),
the linked list will be now as 1->3.

```

**Example 2:**
Input:
LinkedList = 1 <--> 5 <--> 2 <--> 9
x = 1
Output:5 2 9
</aside> */
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function deleteNodeAtPosition(head, position) {
  if (!head) {
    return null;
  }

  let current = head;
  let count = 1;

  // Traverse to the node at the given position
  while (current && count < position) {
    current = current.next;
    count++;
  }

  // If the node is not found at the given position
  if (!current) {
    return head;
  }

  // Update the links to remove the node from the list
  if (current.prev) {
    current.prev.next = current.next;
  } else {
    // If the node to be deleted is the head node
    head = current.next;
  }

  if (current.next) {
    current.next.prev = current.prev;
  }

  return head;
}

// Helper function to print the doubly linked list
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + " <-> ";
    current = current.next;
  }

  result += "NULL";
  console.log(result);
}

// Example usage:
const head = new Node(1);
head.next = new Node(3);
head.next.prev = head;
head.next.next = new Node(4);
head.next.next.prev = head.next;

console.log("Original Doubly Linked List:");
printList(head);

const position = 3;

const modifiedHead = deleteNodeAtPosition(head, position);

console.log("Modified Doubly Linked List:");
printList(modifiedHead);
