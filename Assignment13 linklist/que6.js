{
  /* <aside>
💡 **Question 6**

Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

**Examples:**

Input: a: 5->10->15, b: 2->3->20

Output: 2->3->5->10->15->20

Input: a: 1->1, b: 2->4

Output: 1->1->2->4

</aside>
 */
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeSortedLists(a, b) {
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  }

  let mergedHead = null;
  let mergedTail = null;

  // Set the head of the merged list
  if (a.data <= b.data) {
    mergedHead = a;
    a = a.next;
  } else {
    mergedHead = b;
    b = b.next;
  }

  mergedTail = mergedHead;

  // Merge the lists until one of them becomes empty
  while (a && b) {
    if (a.data <= b.data) {
      mergedTail.next = a;
      a = a.next;
    } else {
      mergedTail.next = b;
      b = b.next;
    }
    mergedTail = mergedTail.next;
  }

  // Append the remaining nodes of list a or b
  if (a) {
    mergedTail.next = a;
  }
  if (b) {
    mergedTail.next = b;
  }

  return mergedHead;
}

// Helper function to print the linked list
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + " -> ";
    current = current.next;
  }

  result += "NULL";
  console.log(result);
}

// Example usage:
const listA = new Node(5);
listA.next = new Node(10);
listA.next.next = new Node(15);

const listB = new Node(2);
listB.next = new Node(3);
listB.next.next = new Node(20);

console.log("List A:");
printList(listA);

console.log("List B:");
printList(listB);

const mergedHead = mergeSortedLists(listA, listB);

console.log("Merged List:");
printList(mergedHead);
