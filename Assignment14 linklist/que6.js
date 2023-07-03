{
  /* <aside>
💡 **Question 6**

Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

**Example 1:**

```
Input:
N = 5
value[] = {2, 4, 7, 8, 9}
k = 3
Output:8 9 2 4 7
Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

```

**Example 2:**

```
Input:
N = 8
value[] = {1, 2, 3, 4, 5, 6, 7, 8}
k = 4
Output:5 6 7 8 1 2 3 4
```

</aside>
 */
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  leftShift(k) {
    if (k === 0 || this.head === null || this.head.next === null) {
      return;
    }

    let current = this.head;
    let count = 1;
    while (count < k && current !== null) {
      current = current.next;
      count++;
    }

    if (current === null) {
      return;
    }

    let kthNode = current;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = this.head;
    this.head = kthNode.next;
    kthNode.next = null;
  }

  display() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.insert(2);
linkedList.insert(4);
linkedList.insert(7);
linkedList.insert(8);
linkedList.insert(9);

const k = 3;
console.log("Input: ");
linkedList.display();
linkedList.leftShift(k);

console.log("Output: ");
linkedList.display();
