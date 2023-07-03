{
  /* <aside>
💡 **Question 7**

Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

**Example:**

```
Original Linked list 10 8 4 2
Reversed Linked list 2 4 8 10
```

</aside>
 */
}

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function reverseDoublyLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let current = head;
  let temp = null;

  // Swap prev and next pointers for all nodes
  while (current) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev; // Move to the next node
  }

  // Update the head
  if (temp) {
    head = temp.prev;
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
const head = new Node(10);
head.next = new Node(8);
head.next.prev = head;
head.next.next = new Node(4);
head.next.next.prev = head.next;
head.next.next.next = new Node(2);
head.next.next.next.prev = head.next.next;

console.log("Original Doubly Linked List:");
printList(head);

const reversedHead = reverseDoublyLinkedList(head);

console.log("Reversed Doubly Linked List:");
printList(reversedHead);
