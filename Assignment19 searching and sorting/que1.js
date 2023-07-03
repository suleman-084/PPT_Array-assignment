//  1. **Merge k Sorted Lists**

// You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

// *Merge all the linked-lists into one sorted linked-list and return it.*

// **Example 1:**

// ```
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// ```

// **Example 2:**

// ```
// Input: lists = []
// Output: []

// ```

// **Example 3:**

// ```
// Input: lists = [[]]
// Output: []

// ```

// **Constraints:**

// - `k == lists.length`
// - `0 <= k <= 10000`
// - `0 <= lists[i].length <= 500`
// - `-10000 <= lists[i][j] <= 10000`
// - `lists[i]` is sorted in **ascending order**.
// - The sum of `lists[i].length` will not exceed `10000`.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size();
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size();
  }

  getParent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  getLeftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  getRightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const minValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }
    return minValue;
  }

  heapifyUp() {
    let index = this.size() - 1;
    while (
      this.hasParent(index) &&
      this.getParent(index).val > this.heap[index].val
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.getRightChild(index).val < this.getLeftChild(index).val
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index].val < this.heap[smallerChildIndex].val) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

function mergeKLists(lists) {
  const mergedList = new ListNode();
  let current = mergedList;
  const minHeap = new MinHeap();

  // Add the first element from each list to the min-heap
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) {
      minHeap.push(lists[i]);
    }
  }

  // Merge the lists using min-heap
  while (minHeap.size() > 0) {
    const minValue = minHeap.pop();
    current.next = minValue;
    current = current.next;

    if (minValue.next !== null) {
      minHeap.push(minValue.next);
    }
  }

  return mergedList.next;
}

// Example usage:
const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const lists = [list1, list2, list3];

const mergedList = mergeKLists(lists);

// Print the merged list
let current = mergedList;
const result = [];
while (current !== null) {
  result.push(current.val);
  current = current.next;
}

console.log(result); // Output: [1, 1, 2, 3, 4, 4, 5, 6]
