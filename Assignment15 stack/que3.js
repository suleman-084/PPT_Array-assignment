{
  /* <aside>
💡 **Question 3**

Implement a Stack using two queues **q1** and **q2**.

**Example 1:**

```
Input:
push(2)
push(3)
pop()
push(4)
pop()
Output:3 4
Explanation:
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the
        stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4

```

**Example 2:**

```
Input:
push(2)
pop()
pop()
push(3)
Output:2 -1
```

</aside>
 */
}

class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(element) {
    // Add the new element to q1
    this.q1.push(element);
  }

  pop() {
    if (this.q1.length === 0) {
      return -1; // Stack is empty
    }

    // Move elements from q1 to q2, except the last element
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    // Remove and return the last element from q1
    const poppedElement = this.q1.shift();

    // Swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];

    return poppedElement;
  }
}

// Example usage:
const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.push(4);
console.log(stack.pop()); // Output: 4
