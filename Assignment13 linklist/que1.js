{
  /* <aside>
💡 **Question 1**

Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

**Examples:**

Input: list1 = 5->2->3->8
list2 = 1->7->4->5
Output: New list = 5->7->4->8

Input:list1 = 2->8->9->3
list2 = 5->3->6->4
Output: New list = 5->8->9->4

</aside> */
}

// Node class to define a linked list node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to create a new linked list using two given linked lists
function createNewList(list1, list2) {
  let head = null; // Head node of the new linked list
  let tail = null; // Tail node of the new linked list

  while (list1 && list2) {
    // Compare the data of the current nodes in list1 and list2
    let newData = Math.max(list1.data, list2.data);

    // Create a new node with the greater data
    let newNode = new Node(newData);

    if (head === null) {
      // If it's the first node, set it as the head and tail
      head = newNode;
      tail = newNode;
    } else {
      // If it's not the first node, append it to the tail and update the tail
      tail.next = newNode;
      tail = newNode;
    }

    // Move to the next nodes in list1 and list2
    list1 = list1.next;
    list2 = list2.next;
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

// Create the first linked list: 5->2->3->8
let list1 = new Node(5);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(8);

// Create the second linked list: 1->7->4->5
let list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(4);
list2.next.next.next = new Node(5);

// Create the new linked list by comparing list1 and list2
let newList = createNewList(list1, list2);

// Print the new linked list
printList(newList);
