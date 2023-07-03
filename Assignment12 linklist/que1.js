{
  /* <aside>
💡 **Question 1**

Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

**Example 1:**

```
Input:
LinkedList: 1->2->3->4->5
Output:1 2 4 5

```

**Example 2:**
Input:
LinkedList: 2->4->6->7->5->1
Output:2 4 6 5 1

</aside> */
}

function deleteMiddleNode(head) {
  if (head === null || head.next === null) {
    return null; // Return null if the list is empty or has only one node
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next; // Delete the middle node by adjusting the pointers

  return head;
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
          next: null,
        },
      },
    },
  },
};

console.log(deleteMiddleNode(list1)); // Output: { val: 1, next: { val: 2, next: { val: 4, next: { val: 5, next: null } } } }

// Example 2:
let list2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 7,
        next: {
          val: 5,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    },
  },
};

console.log(deleteMiddleNode(list2)); // Output: { val: 2, next: { val: 4, next: { val: 6, next: { val: 5, next: { val: 1, next: null } } } } }
