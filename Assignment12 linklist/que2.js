{
  /* <aside>
💡 **Question 2**

Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

**Example 1:**

```
Input:
N = 3
value[] = {1,3,4}
x(position at which tail is connected) = 2
Output:True
Explanation:In above test case N = 3.
The linked list with nodes N = 3 is
given. Then value of x=2 is given which
means last node is connected with xth
node of linked list. Therefore, there
exists a loop.
```

**Example 2:**

Input:
N = 4
value[] = {1,8,3,4}
x = 0
Output:False
Explanation:For N = 4 ,x = 0 means
then lastNode->next = NULL, then
the Linked list does not contains
any loop.

</aside> */
}

function hasLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Loop detected
    }
  }

  return false; // No loop found
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

// Creating a loop by connecting the last node to the second node
list1.next.next.next = list1.next;

console.log(hasLoop(list1)); // Output: true

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

console.log(hasLoop(list2)); // Output: false
