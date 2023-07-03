{
  /* <aside>
💡 **Question 3**

Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

**Example 1:**

```
Input:
N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output:8
Explanation:In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.

```

**Example 2:**
```
Input:
N = 5
LinkedList: 10->5->100->5
Output:-1
Explanation:In the second example, there
are 4 nodes in the linked list and we
need to find 5th from the end. Since 'n'
is more than the number of nodes in the
linked list, the output is -1.
```

</aside> */
}

function getNthFromEnd(head, N) {
  let first = head;
  let second = head;

  // Move the first pointer N nodes ahead
  for (let i = 0; i < N; i++) {
    if (first === null) {
      return -1; // N is greater than the number of nodes in the list
    }
    first = first.next;
  }

  // Move both pointers simultaneously
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second !== null ? second.val : -1;
}

// Example 1:
let list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};

console.log(getNthFromEnd(list1, 2)); // Output: 8

// Example 2:
let list2 = {
  val: 10,
  next: {
    val: 5,
    next: {
      val: 100,
      next: {
        val: 5,
        next: null,
      },
    },
  },
};

console.log(getNthFromEnd(list2, 5)); // Output: -1
