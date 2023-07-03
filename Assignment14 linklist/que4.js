{
  /* <aside>
💡 **Question 4**

You are given a special linked list with **N** nodes where each node has a next pointer pointing to its next node. You are also given **M** random pointers, where you will be given **M** number of pairs denoting two nodes **a** and **b**  **i.e. a->arb = b** (arb is pointer to random node)**.**

Construct a copy of the given list. The copy should consist of exactly **N** new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes **X** and **Y** in the original list, where **X.arb** **-->** **Y**, then for the corresponding two nodes **x** and **y** in the copied list, **x.arb --> y.**

Return the head of the copied linked list.

!https://contribute.geeksforgeeks.org/wp-content/uploads/clone.jpg

**Note** :- The diagram isn't part of any example, it just depicts an example of how the linked list may look like.

**Example 1:**

```
Input:
N = 4, M = 2
value = {1,2,3,4}
pairs = {{1,2},{2,4}}
Output:1
Explanation:In this test case, there
are 4 nodes in linked list.  Among these
4 nodes,  2 nodes have arbitrary pointer
set, rest two nodes have arbitrary pointer
as NULL. Second line tells us the value
of four nodes. The third line gives the
information about arbitrary pointers.
The first node arbitrary pointer is set to
node 2.  The second node arbitrary pointer
is set to node 4.

```

**Example 2:**

```
Input:
N = 4, M = 2
value[] = {1,3,5,9}
pairs[] = {{1,1},{3,4}}
Output:1
Explanation:In the given testcase ,
applying the method as stated in the
above example, the output will be 1.
```

</aside>
 */
}
// Definition for a special linked list node
function Node(val) {
  this.val = val;
  this.next = null;
  this.random = null;
}

function copyRandomList(head) {
  if (head === null) {
    return null;
  }

  const nodeMap = new Map();

  let currentNode = head;
  // Create a copy of each node and store it in the map
  while (currentNode !== null) {
    const newNode = new Node(currentNode.val);
    nodeMap.set(currentNode, newNode);
    currentNode = currentNode.next;
  }

  currentNode = head;
  // Connect the next and random pointers of the copied nodes
  while (currentNode !== null) {
    const copiedNode = nodeMap.get(currentNode);
    copiedNode.next = nodeMap.get(currentNode.next);
    copiedNode.random = nodeMap.get(currentNode.random);
    currentNode = currentNode.next;
  }

  return nodeMap.get(head);
}

// Example usage:
// Create the special linked list for Example 1: 1 -> 2 -> 3 -> 4
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node1.random = node2; // 1 -> 2
node2.random = node4; // 2 -> 4

// Call the copyRandomList function
const newHead = copyRandomList(node1);

// Print the copied linked list
let currentNode = newHead;
while (currentNode !== null) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}
