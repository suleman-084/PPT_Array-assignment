//  Question-1:

// Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

// 1. ‘l’ denotes the leaf
// 2. ‘n’ denotes internal node

// The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.

// **Examples :**

// Input  : nlnll
// Output : 2

// Input  : nlnnlll
// Output : 3

function calculateDepth(preorder) {
  let index = 0;

  function helper() {
    if (index >= preorder.length) {
      return 0;
    }

    const currentChar = preorder[index++];
    if (currentChar === "l") {
      return 0;
    }

    const leftSubtreeDepth = helper();
    const rightSubtreeDepth = helper();

    return Math.max(leftSubtreeDepth, rightSubtreeDepth) + 1;
  }

  return helper();
}

// Example usage:
console.log(calculateDepth("nlnll"));
// Output: 2

console.log(calculateDepth("nlnnlll"));
// Output: 3
