{
  /* <aside>
💡 **Question 3**

Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

Input  : Stack[] = [1, 2, 3, 4, 5]

Output : Stack[] = [1, 2, 4, 5]

Input  : Stack[] = [1, 2, 3, 4, 5, 6]

Output : Stack[] = [1, 2, 4, 5, 6]

</aside>
 */
}

function deleteMiddleElement(stack) {
  const size = stack.length;
  const middleIndex = Math.floor(size / 2);

  // Base case: if stack is empty or has only one element, return the stack as is
  if (size === 0 || size === 1) {
    return stack;
  }

  // Recursive function to delete the middle element
  function deleteMiddle(stack, current) {
    // Base case: if the current index is the middle index, remove the element
    if (current === middleIndex) {
      stack.pop();
      return;
    }

    // Remove the current element and call the function recursively for the remaining stack
    const element = stack.pop();
    deleteMiddle(stack, current + 1);

    // Insert the removed element back to its original position after the recursive call
    stack.push(element);
  }

  // Call the recursive function to delete the middle element
  deleteMiddle(stack, 0);

  return stack;
}

// Example usage:
const stack1 = [1, 2, 3, 4, 5];
deleteMiddleElement(stack1);
console.log(stack1); // Output: [1, 2, 4, 5]

const stack2 = [1, 2, 3, 4, 5, 6];
deleteMiddleElement(stack2);
console.log(stack2); // Output: [1, 2, 4, 5, 6]
