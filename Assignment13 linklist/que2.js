{
  /* <aside>
💡 **Question 2**

Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

**Example 1:**

```
Input:
LinkedList: 
11->11->11->21->43->43->60
Output:
11->21->43->60
```

**Example 2:**
Input:
LinkedList: 
10->12->12->25->25->25->34
Output:
10->12->25->34

</aside> */
}

// Node class to define a linked list node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to remove duplicate nodes from a sorted linked list
function removeDuplicates(head) {
  let current = head;

  while (current && current.next) {
    // Compare the data of the current node with the data of the next node
    if (current.data === current.next.data) {
      // If the data is the same, skip the next node by updating the current node's next pointer
      current.next = current.next.next;
    } else {
      // If the data is different, move to the next node
      current = current.next;
    }
  }

  return head;
}

// Utility function to print the linked list
function printList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.data + "->";
    current = current.next;
  }

  result += "null";
  console.log(result);
}

// Create the linked list: 11->11->11->21->43->43->60
let head = new Node(11);
head.next = new Node(11);
head.next.next = new Node(11);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(43);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(60);

// Remove duplicate nodes from the linked list
head = removeDuplicates(head);

// Print the modified linked list
printList(head);
