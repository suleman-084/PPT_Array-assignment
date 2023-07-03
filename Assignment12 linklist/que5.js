{
  /* <aside>
💡 **Question 5**

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
Input:
M = 2, N = 2
Linked List: 1->2->3->4->5->6->7->8
Output:
Linked List: 1->2->5->6

Input:
M = 3, N = 2
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->2->3->6->7->8

Input:
M = 1, N = 1
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->3->5->7->9

</aside> */
}

function removeLoop(head) {
  if (head === null || head.next === null) {
    return; // No loop present in an empty list or a list with a single node
  }

  let slow = head;
  let fast = head;

  // Step 1: Detect the loop using the tortoise and hare algorithm
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break; // Loop detected
    }
  }

  // Step 2: If there is a loop, find the loop starting point
  if (slow === fast) {
    slow = head;

    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    // Step 3: Remove the loop by setting the next of the last node to null
    fast.next = null;
  }
}

// Example 1:
let list1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

list1.next.next.next = list1.next; // Creating a loop

removeLoop(list1);

console.log(list1);
// Output:
// {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// }

// Example 2:
let list2 = {
  val: 1,
  next: {
    val: 8,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

removeLoop(list2);

console.log(list2);
