{
  /* <aside>
  💡 **Question 2** Given a stack of integers, sort it in ascending order using
  another temporary stack. **Examples:** ``` Input : [34, 3, 31, 98, 92, 23]
  Output : [3, 23, 31, 34, 92, 98] Input : [3, 5, 1, 4, 2, 8] Output : [1, 2, 3,
  4, 5, 8] ```
</aside>; */
}

function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  // Reverse the temporary stack to get ascending order
  const sortedStack = [];
  while (tempStack.length > 0) {
    sortedStack.push(tempStack.pop());
  }

  return sortedStack;
}

// Example usage:
const stack1 = [34, 3, 31, 98, 92, 23];
console.log(sortStack(stack1)); // Output: [3, 23, 31, 34, 92, 98]

const stack2 = [3, 5, 1, 4, 2, 8];
console.log(sortStack(stack2)); // Output: [1, 2, 3, 4, 5, 8]
