{
  /* <aside>
💡 **Question 1**

Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

**Example 1:**

```
Input:
N = 3
value[] = {1,3,4}
X = 2
Output:1
Explanation:The link list looks like
1 -> 3 -> 4
     ^    |
     |____|
A loop is present. If you remove it
successfully, the answer will be 1.

```

**Example 2:**

```
Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output:1
Explanation:The Linked list does not
contains any loop.
```

**Example 3:**

```
Input:
N = 4
value[] = {1,2,3,4}
X = 1
Output:1
Explanation:The link list looks like
1 -> 2 -> 3 -> 4
^              |
|______________|
A loop is present.
If you remove it successfully,
the answer will be 1.
```

</aside>
 */
}

// Definition for a singly-linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function removeLoop(head) {
  // Check if the linked list is empty or has only one node
  if (head === null || head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head;
  let loopExists = false;

  // Find if a loop exists in the linked list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      loopExists = true;
      break;
    }
  }

  // If no loop exists, return the original linked list
  if (!loopExists) {
    return head;
  }

  // Move the slow pointer to the head and find the loop start point
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the loop by setting the next of the loop end point to null
  fast.next = null;

  return head;
}

// Example usage:
// Create the linked list for Example 1: 1 -> 3 -> 4 -> 3
const node1 = new ListNode(1);
const node2 = new ListNode(3);
const node3 = new ListNode(4);
const node4 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creating a loop

// Call the removeLoop function
const newHead = removeLoop(node1);

// Print the values of the modified linked list
let currentNode = newHead;
while (currentNode !== null) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}
