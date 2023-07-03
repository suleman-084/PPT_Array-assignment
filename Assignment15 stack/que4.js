{
  /* <aside>
💡 **Question 4**

You are given a stack **St**. You have to reverse the stack using recursion.

**Example 1:**

```
Input:St = {3,2,1,7,6}
Output:{6,7,1,2,3}
```

**Example 2:**

```
Input:St = {4,3,9,6}
Output:{6,9,3,4}
```

</aside>
 */
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  reverse() {
    if (!this.isEmpty()) {
      const temp = this.pop();
      this.reverse();
      this.insertAtBottom(temp);
    }
  }

  insertAtBottom(item) {
    if (this.isEmpty()) {
      this.push(item);
    } else {
      const temp = this.pop();
      this.insertAtBottom(item);
      this.push(temp);
    }
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

// Example usage:
const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(7);
stack.push(6);

console.log("Original stack:");
stack.printStack();

stack.reverse();

console.log("Reversed stack:");
stack.printStack();
