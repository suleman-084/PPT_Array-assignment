{
  /* <aside>
💡 **Question 4**

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

**Example:**

```
Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.
```

</aside>
 */
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseAlternateKNodes(head, k) {
  if (!head || k <= 1) {
    return head;
  }

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

  // Connect the reversed k nodes with the next k nodes recursively
  if (head) {
    head.next = current;
  }

  count = 0;
  while (count < k - 1 && current) {
    current = current.next;
    count++;
  }

  if (current) {
    current.next = reverseAlternateKNodes(current.next, k);
  }

  return prev;
}

// Helper function to print the linked list
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }

  result += "NULL";
  console.log(result);
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

const k = 3;

console.log("Original Linked List:");
printList(head);

const reversedHead = reverseAlternateKNodes(head, k);

console.log("Reversed Linked List:");
printList(reversedHead);
