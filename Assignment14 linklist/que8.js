{
  /* <aside>
  💡 **Question 8** Given the `head` of a linked list, we repeatedly delete
  consecutive sequences of nodes that sum to `0` until there are no such
  sequences. After doing so, return the head of the final linked list.  You may
  return any such answer. (Note that in the examples below, all sequences are
  serializations of `ListNode` objects.) **Example 1:** ``` Input: head =
  [1,2,-3,3,1] Output: [3,1] Note: The answer [1,2,1] would also be accepted.
  ``` **Example 2:** ``` Input: head = [1,2,3,-3,4] Output: [1,2,4] ```
  **Example 3:** Input: head = [1,2,3,-3,-2] Output: [1]
</aside>; */
}

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Helper function to convert an array to a linked list
function getLinkedListFromArray(arr) {
  let head = new ListNode(0); // Create a dummy node
  let curr = head;

  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return head.next; // Skip the dummy node and return the actual head
}

// Helper function to convert a linked list to an array
function getArrayFromLinkedList(head) {
  let result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

// Function to remove consecutive sequences that sum to 0
function removeZeroSumSublists(head) {
  // Create a dummy node to handle edge cases
  let dummy = new ListNode(0);
  dummy.next = head;

  let prefixSum = 0;
  let sumMap = new Map(); // Map to store prefix sums

  // First pass to calculate prefix sums and store them in the map
  let curr = dummy;
  while (curr !== null) {
    prefixSum += curr.val;

    if (sumMap.has(prefixSum)) {
      // Remove nodes between sumMap.get(prefixSum).next and curr
      let prevSumNode = sumMap.get(prefixSum);
      let nodeToRemove = prevSumNode.next;

      while (nodeToRemove !== curr) {
        prefixSum += nodeToRemove.val;
        sumMap.delete(prefixSum);
        nodeToRemove = nodeToRemove.next;
      }

      // Update the previous sum node to skip the removed nodes
      prevSumNode.next = curr.next;
    } else {
      sumMap.set(prefixSum, curr);
    }

    curr = curr.next;
  }

  return dummy.next;
}

// Test the implementation
let head1 = getLinkedListFromArray([1, 2, -3, 3, 1]);
let result1 = removeZeroSumSublists(head1);
console.log(getArrayFromLinkedList(result1)); // Output: [3, 1] or [1, 2, 1]

let head2 = getLinkedListFromArray([1, 2, 3, -3, 4]);
let result2 = removeZeroSumSublists(head2);
console.log(getArrayFromLinkedList(result2)); // Output: [1, 2, 4]

let head3 = getLinkedListFromArray([1, 2, 3, -3, -2]);
let result3 = removeZeroSumSublists(head3);
console.log(getArrayFromLinkedList(result3)); // Output: [1]
