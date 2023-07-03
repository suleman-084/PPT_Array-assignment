{
  /* <aside>
💡 **Question 2**

A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

**Example 1:**

```
Input:
LinkedList: 4->5->6
Output:457

```

**Example 2:**

```
Input:
LinkedList: 1->2->3
Output:124
```

</aside>
 */
}

// Definition for a singly-linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addOne(head) {
  let dummy = new ListNode(0); // Create a dummy node
  dummy.next = head;

  let lastNonNine = dummy; // Track the last non-nine digit node

  // Find the rightmost non-nine digit
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.val !== 9) {
      lastNonNine = currentNode;
    }
    currentNode = currentNode.next;
  }

  // Increment the rightmost non-nine digit
  lastNonNine.val += 1;

  // Set all digits after the rightmost non-nine digit to zero
  currentNode = lastNonNine.next;
  while (currentNode !== null) {
    currentNode.val = 0;
    currentNode = currentNode.next;
  }

  // If the dummy node is still the head, remove it
  if (dummy === head) {
    return dummy.next;
  }

  return head;
}

// Example usage:
// Create the linked list for Example 1: 4 -> 5 -> 6
const node1 = new ListNode(4);
const node2 = new ListNode(5);
const node3 = new ListNode(6);
node1.next = node2;
node2.next = node3;

// Call the addOne function
const newHead = addOne(node1);

// Print the resulting number
let currentNode = newHead;
let result = "";
while (currentNode !== null) {
  result += currentNode.val;
  currentNode = currentNode.next;
}

console.log(result);
