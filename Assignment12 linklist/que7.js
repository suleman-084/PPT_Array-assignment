{
  /* <aside>
💡 **Question 7**

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

</aside> */
}

function insertAlternate(head1, head2) {
  if (head1 === null) {
    return head2; // If the first list is empty, return the second list
  }

  let current1 = head1;
  let current2 = head2;
  let next1 = null;
  let next2 = null;

  while (current1 !== null && current2 !== null) {
    // Save the next pointers
    next1 = current1.next;
    next2 = current2.next;

    // Insert the second list node into the first list
    current1.next = current2;
    current2.next = next1;

    // Move to the next positions
    current1 = next1;
    current2 = next2;
  }

  return head1;
}

// Example:
let list1 = {
  val: 5,
  next: {
    val: 7,
    next: {
      val: 17,
      next: {
        val: 13,
        next: {
          val: 11,
          next: null,
        },
      },
    },
  },
};

let list2 = {
  val: 12,
  next: {
    val: 10,
    next: {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 6,
          next: null,
        },
      },
    },
  },
};

let mergedList = insertAlternate(list1, list2);

console.log(mergedList);
// Output:
// {
//   val: 5,
//   next: {
//     val: 12,
//     next: {
//       val: 7,
//       next: {
//         val: 10,
//         next: {
//           val: 17,
//           next: {
//             val: 2,
//             next: {
//               val: 13,
//               next: {
//                 val: 4,
//                 next: {
//                   val: 11,
//                   next: {
//                     val: 6,
//                     next: null,
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// }

console.log(list2);
// Output: null (The second list becomes empty)
