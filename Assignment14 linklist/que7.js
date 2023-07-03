{
  /* <aside>
💡 **Question 7**

You are given the `head` of a linked list with `n` nodes.

For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

**Example 1:**

!https://assets.leetcode.com/uploads/2021/08/05/linkedlistnext1.jpg

```
Input: head = [2,1,5]
Output: [5,5,0]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2021/08/05/linkedlistnext2.jpg

```
Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]
```

</aside>
 */
}

function nextLargerNodes(head) {
  const stack = [];
  const answer = [];

  // Traverse the linked list from right to left
  while (head) {
    while (stack.length > 0 && stack[stack.length - 1].val < head.val) {
      // Pop nodes from stack and update answer array
      const poppedNode = stack.pop();
      answer[poppedNode.index] = head.val;
    }

    stack.push({ val: head.val, index: answer.length });
    answer.push(0);
    head = head.next;
  }

  return answer.reverse();
}

// Example 1
const head1 = { val: 2, next: { val: 1, next: { val: 5, next: null } } };
console.log(nextLargerNodes(head1));
// Output: [5, 5, 0]

// Example 2
const head2 = {
  val: 2,
  next: {
    val: 7,
    next: { val: 4, next: { val: 3, next: { val: 5, next: null } } },
  },
};
console.log(nextLargerNodes(head2));
// Output: [7, 0, 5, 5, 0]
