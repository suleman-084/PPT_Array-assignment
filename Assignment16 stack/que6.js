{
  /* <aside>
💡 **Question 6**

Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

Only following standard operations are allowed on queue.

- **enqueue(x) :** Add an item x to rear of queue
- **dequeue() :** Remove an item from front of queue
- **size() :** Returns number of elements in queue.
- **front() :** Finds front item.
</aside> */
}

function reverseKElements(queue, k) {
  if (queue.length === 0 || k <= 0 || k > queue.length) {
    return queue; // Invalid input or nothing to reverse
  }

  const stack = [];

  // Dequeue and push the first k elements onto the stack
  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }

  // Enqueue the elements from the stack back into the queue
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  // Enqueue the remaining elements from the original queue back into the queue
  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift());
  }

  return queue;
}

// Example usage:
const queue = [1, 2, 3, 4, 5, 6, 7];
const k = 4;
console.log(reverseKElements(queue, k)); // Output: [4, 3, 2, 1, 5, 6, 7]
