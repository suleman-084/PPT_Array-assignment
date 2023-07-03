// Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.

// > A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
// >

// ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d30bbf79-b1eb-4ba4-b23e-6d3f27ccdfe5/Untitled.png)

function isCircular(head) {
  if (head === null || head.next === null) {
    return false; // An empty list or a list with only one node cannot be circular
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // The fast pointer caught up to the slow pointer, indicating a circular list
    }
  }

  return false; // The fast pointer reached the end of the list, indicating a non-circular list
}

// Example:
let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

// Make the list circular by connecting the last node to the second node
list.next.next.next.next = list.next;

let isCircularList = isCircular(list);

console.log(isCircularList);
// Output: true (The linked list is circular)
