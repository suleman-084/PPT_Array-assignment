{
  /* <aside>
💡 **Question 5**

Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

**Examples**:
Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10

</aside> */
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteLastOccurrence(head, key) {
  if (!head) {
    return null;
  }

  let current = head;
  let lastOccurrence = null;
  let prev = null;

  // Traverse the linked list to find the last occurrence of the key
  while (current) {
    if (current.data === key) {
      lastOccurrence = current;
    }
    current = current.next;
  }

  if (!lastOccurrence) {
    // Key not found
    return head;
  }

  current = head;

  // If the last occurrence is the head node, update the head
  if (lastOccurrence === head) {
    head = head.next;
    return head;
  }

  // Find the previous node of the last occurrence
  while (current.next !== lastOccurrence) {
    current = current.next;
  }

  // Delete the last occurrence by updating the links
  current.next = lastOccurrence.next;

  return head;
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
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

const key = 2;

console.log("Original Linked List:");
printList(head);

const modifiedHead = deleteLastOccurrence(head, key);

console.log("Modified Linked List:");
printList(modifiedHead);
