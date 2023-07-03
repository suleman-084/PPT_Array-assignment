//  **Question 7**

// Design a queue that supports `push` and `pop` operations in the front, middle, and back.

// Implement the `FrontMiddleBack` class:

// - `FrontMiddleBack()` Initializes the queue.
// - `void pushFront(int val)` Adds `val` to the **front** of the queue.
// - `void pushMiddle(int val)` Adds `val` to the **middle** of the queue.
// - `void pushBack(int val)` Adds `val` to the **back** of the queue.
// - `int popFront()` Removes the **front** element of the queue and returns it. If the queue is empty, return `1`.
// - `int popMiddle()` Removes the **middle** element of the queue and returns it. If the queue is empty, return `1`.
// - `int popBack()` Removes the **back** element of the queue and returns it. If the queue is empty, return `1`.

// **Notice** that when there are **two** middle position choices, the operation is performed on the **frontmost** middle position choice. For example:

// - Pushing `6` into the middle of `[1, 2, 3, 4, 5]` results in `[1, 2, 6, 3, 4, 5]`.
// - Popping the middle from `[1, 2, 3, 4, 5, 6]` returns `3` and results in `[1, 2, 4, 5, 6]`.

// **Example 1:**

// Input:
// ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
// [[], [1], [2], [3], [4], [], [], [], [], []]
// Output:
// [null, null, null, null, null, 1, 3, 4, 2, -1]

// Explanation:
// FrontMiddleBackQueue q = new FrontMiddleBackQueue();
// q.pushFront(1);   // [1]
// q.pushBack(2);    // [1,2]
// q.pushMiddle(3);  // [1,3, 2]
// q.pushMiddle(4);  // [1,4, 3, 2]
// q.popFront();     // return 1 -> [4, 3, 2]
// q.popMiddle();    // return 3 -> [4, 2]
// q.popMiddle();    // return 4 -> [2]
// q.popBack();      // return 2 -> []
// q.popFront();     // return -1 -> [] (The queue is empty)

class FrontMiddleBackQueue {
  constructor() {
    this.front = [];
    this.back = [];
  }

  pushFront(val) {
    this.front.push(val);
    this.balance();
  }

  pushMiddle(val) {
    const n = this.size();
    const m = Math.floor(n / 2);
    if (n % 2 === 0) {
      this.front.splice(m, 0, val);
    } else {
      this.back.splice(0, 0, this.front.pop());
      this.front.splice(m, 0, val);
    }
  }

  pushBack(val) {
    this.back.push(val);
    this.balance();
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.front.length > this.back.length) {
      this.back.splice(0, 0, this.front.pop());
    }
    return this.front.pop();
  }

  popMiddle() {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.front.length > this.back.length) {
      this.back.splice(0, 0, this.front.pop());
    }
    const m = Math.floor(this.size() / 2);
    return this.front.splice(m, 1)[0];
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.front.length === this.back.length) {
      this.front.push(this.back.pop());
    }
    return this.back.pop();
  }

  balance() {
    const n = this.size();
    const m = Math.floor(n / 2);
    if (this.front.length > m) {
      this.back.splice(0, 0, this.front.pop());
    } else if (this.front.length < m) {
      this.front.push(this.back.shift());
    }
  }

  isEmpty() {
    return this.front.length === 0 && this.back.length === 0;
  }

  size() {
    return this.front.length + this.back.length;
  }
}

const q = new FrontMiddleBackQueue();
console.log(q.pushFront(1)); // Output: null
console.log(q.pushBack(2)); // Output: null
console.log(q.pushMiddle(3)); // Output: null
console.log(q.pushMiddle(4)); // Output: null
console.log(q.popFront()); // Output: 1
console.log(q.popMiddle()); // Output: 3
console.log(q.popMiddle()); // Output: 4
console.log(q.popBack()); // Output: 2
console.log(q.popFront()); // Output: -1
