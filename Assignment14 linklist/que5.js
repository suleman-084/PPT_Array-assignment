{
  /* <aside>
💡 **Question 5**

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg

```
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
```

</aside>
 */
}

function oddEvenList(head) {
  if (!head || !head.next) {
    return head;
  }

  let oddHead = head;
  let evenHead = head.next;
  let odd = oddHead;
  let even = evenHead;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return oddHead;
}

// Example 1
const head1 = {
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
};
console.log(oddEvenList(head1));
// Output: { val: 1, next: { val: 3, next: { val: 5, next: { val: 2, next: { val: 4, next: null } } } } }

// Example 2
const head2 = {
  val: 2,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 5,
        next: { val: 6, next: { val: 4, next: { val: 7, next: null } } },
      },
    },
  },
};
console.log(oddEvenList(head2));
// Output: { val: 2, next: { val: 3, next: { val: 6, next: { val: 7, next: { val: 1, next: { val: 5, next: { val: 4, next: null } } } } } } }
