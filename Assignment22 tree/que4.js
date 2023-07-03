//  Question-4:

// Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.

// **Examples:**

// Input :

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 2 4 5 3
//         Postorder -> 4 5 2 3 1
// Output :

// Yes
// Explanation :

// All of the above three traversals are of
// the same tree

//                            1
//                          /   \
//                         2     3
//                       /   \
//                      4     5

// Input :

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 5 4 2 3
//         Postorder -> 4 1 2 3 5
// Output :

// No

function areTraversalsSame(preorder, inorder, postorder) {
  // Base cases: empty traversals or different lengths
  if (preorder.length === 0 && inorder.length === 0 && postorder.length === 0) {
    return true;
  }

  if (
    preorder.length !== inorder.length ||
    inorder.length !== postorder.length
  ) {
    return false;
  }

  // Check if the first element of Preorder matches the last element of Postorder
  if (preorder[0] !== postorder[postorder.length - 1]) {
    return false;
  }

  // Find the root index in the Inorder traversal
  const rootIndex = inorder.indexOf(preorder[0]);

  // Divide the traversals into left and right subtrees
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(
    leftInorder.length,
    postorder.length - 1
  );

  // Recursively check if the left and right subtrees have the same traversals
  const leftSame = areTraversalsSame(leftPreorder, leftInorder, leftPostorder);
  const rightSame = areTraversalsSame(
    rightPreorder,
    rightInorder,
    rightPostorder
  );

  // Return true only if both left and right subtrees have the same traversals
  return leftSame && rightSame;
}

// Example usage:
const inorder = [4, 2, 5, 1, 3];
const preorder = [1, 2, 4, 5, 3];
const postorder = [4, 5, 2, 3, 1];

console.log(areTraversalsSame(preorder, inorder, postorder)); // Output: Yes
