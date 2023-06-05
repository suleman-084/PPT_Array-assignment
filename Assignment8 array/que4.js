//  **Question 4**

// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.

// **Input:** s = "4(2(3)(1))(6(5))"

// **Output:** [4,2,6,3,1,5]

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructTreeFromString(s) {
  if (!s || s.length === 0) {
    return null;
  }

  let root = null;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(root);
    } else if (s[i] === ")") {
      stack.pop();
    } else {
      let j = i;
      while (j < s.length && !isNaN(parseInt(s[j]))) {
        j++;
      }
      const value = parseInt(s.substring(i, j));
      i = j - 1;

      const newNode = new TreeNode(value);
      if (root === null) {
        root = newNode;
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.left) {
          parent.left = newNode;
        } else {
          parent.right = newNode;
        }
      }
    }
  }

  return root;
}

// Test the function
const s = "4(2(3)(1))(6(5))";
const root = constructTreeFromString(s);
console.log(root);
