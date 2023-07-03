{
  /* <aside>
💡 **Question 4**

Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

!https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png

**Examples:**

> Input: R->A->D->A->R->NULL
> 
> 
> **Output:** Yes
> 
> **Input:** C->O->D->E->NULL
> 
> **Output:** No
> 
</aside> */
}

function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true; // An empty list or a single node is considered a palindrome
  }

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: Compare the first half and the reversed second half
  let firstHalf = head;
  let secondHalf = prev;

  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false; // Not a palindrome
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true; // Palindrome
}

// Example 1:
let list1 = {
  val: "R",
  next: {
    val: "A",
    next: {
      val: "D",
      next: {
        val: "A",
        next: {
          val: "R",
          next: null,
        },
      },
    },
  },
};

console.log(isPalindrome(list1)); // Output: true

// Example 2:
let list2 = {
  val: "C",
  next: {
    val: "O",
    next: {
      val: "D",
      next: {
        val: "E",
        next: null,
      },
    },
  },
};

console.log(isPalindrome(list2)); // Output: false
