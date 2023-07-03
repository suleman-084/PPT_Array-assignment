{
  /* <aside>
💡 **Question 3**

Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

**Example 1:**

```
Input:
5 -> 10 -> 19 -> 28
|     |     |     |
7     20    22   35
|           |     |
8          50    40
|                 |
30               45
Output: 5-> 7-> 8- > 10 -> 19-> 20->
22-> 28-> 30-> 35-> 40-> 45-> 50.
Explanation:
The resultant linked lists has every
node in a single level.(Note:| represents the bottom pointer.)

```

**Example 2:**
Input:
5 -> 10 -> 19 -> 28
|          |
7          22
|          |
8          50
|
30
Output: 5->7->8->10->19->22->28->30->50
Explanation:
The resultant linked lists has every
node in a single level.

(Note:| represents the bottom pointer.)

</aside> */
}

// Definition for a singly-linked list node
function ListNode(val) {
  this.val = val;
  this.next = null;
  this.bottom = null;
}

function mergeLists(list1, list2) {
  const dummy = new ListNode(0);
  let tail = dummy;

  // Merge the two lists in sorted order
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.bottom = list1;
      list1 = list1.bottom;
    } else {
      tail.bottom = list2;
      list2 = list2.bottom;
    }
    tail = tail.bottom;
  }

  // Attach the remaining nodes
  if (list1 !== null) {
    tail.bottom = list1;
  } else {
    tail.bottom = list2;
  }

  return dummy.bottom;
}

function flattenLinkedList(head) {
  // Base case: If the head is null or there's no next node, return the head
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively flatten the rest of the list
  head.next = flattenLinkedList(head.next);

  // Merge the current sublist with the flattened sublist
  head = mergeLists(head, head.next);

  return head;
}

// Example usage:
// Create the linked list for Example 1
const node1 = new ListNode(5);
const node2 = new ListNode(10);
const node3 = new ListNode(19);
const node4 = new ListNode(28);
const node5 = new ListNode(7);
const node6 = new ListNode(20);
const node7 = new ListNode(22);
const node8 = new ListNode(35);
const node9 = new ListNode(8);
const node10 = new ListNode(50);
const node11 = new ListNode(40);
const node12 = new ListNode(30);
const node13 = new ListNode(45);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node1.bottom = node5;
node5.bottom = node6;
node6.bottom = node7;
node7.bottom = node8;
node2.bottom = node9;
node9.bottom = node10;
node10.bottom = node11;
node3.bottom = node12;
node12.bottom = node13;

// Call the flattenLinkedList function
const newHead = flattenLinkedList(node1);

// Print the flattened list
let currentNode = newHead;
while (currentNode !== null) {
  console.log(currentNode.val);
  currentNode = currentNode.bottom;
}
