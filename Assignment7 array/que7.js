//  **Question 7**

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac".

function backspaceCompare(s, t) {
  const stackS = [];
  const stackT = [];

  for (let char of s) {
    if (char === "#") {
      stackS.pop();
    } else {
      stackS.push(char);
    }
  }

  for (let char of t) {
    if (char === "#") {
      stackT.pop();
    } else {
      stackT.push(char);
    }
  }

  return stackS.join("") === stackT.join("");
}

// Test the function
const s = "ab#c";
const t = "ad#c";
const areEqual = backspaceCompare(s, t);
console.log(areEqual);
