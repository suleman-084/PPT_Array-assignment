{
  /* <aside>
💡 **Question 6**

Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

Difficulty Level: Rookie

**Examples**:
Input:
M = 2, N = 2
Linked List: 1->2->3->4->5->6->7->8
Output:
Linked List: 1->2->5->6

Input:
M = 3, N = 2
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->2->3->6->7->8

Input:
M = 1, N = 1
Linked List: 1->2->3->4->5->6->7->8->9->10
Output:
Linked List: 1->3->5->7->9

</aside> */
}

function skipDeleteNodes(head, M, N) {
  if (head === null || M <= 0 || N <= 0) {
    return head; // No modification needed for invalid inputs
  }

  let current = head;
  let previous = null;

  while (current !== null) {
    // Skip M nodes
    for (let i = 0; i < M && current !== null; i++) {
      previous = current;
      current = current.next;
    }

    // Delete N nodes
    for (let i = 0; i < N && current !== null; i++) {
      current = current.next;
    }

    // Update the next pointer of the previous node
    previous.next = current;
  }

  return head;
}

// Example 1:
let list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};

let modifiedList1 = skipDeleteNodes(list1, 2, 2);

console.log(modifiedList1);
// Output:
// {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 5,
//       next: {
//         val: 6,
//         next: null,
//       },
//     },
//   },
// }

// Example 2:
let list2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: {
                    val: 10,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

let modifiedList2 = skipDeleteNodes(list2, 3, 2);

console.log(modifiedList2);
// Output:
// {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 6,
//         next: {
//           val: 7,
//           next: {
//             val: 8,
//             next: null,
//           },
//         },
//       },
//     },
//   },
// }

// Example 3:
let list3 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                next: {
                  val: 9,
                  next: {
                    val: 10,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

let modifiedList3 = skipDeleteNodes(list3, 1, 1);

console.log(modifiedList3);
