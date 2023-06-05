//  **Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "*") {
      stack.push(char);
    } else if (char === ")" && stack.length > 0) {
      stack.pop();
    } else if (char === ")" && stack.length === 0) {
      // If there are no matching '(' or '*' left, the string is invalid
      return false;
    }
  }

  let openCount = 0;

  // Iterate through the remaining elements in the stack
  while (stack.length > 0) {
    const top = stack.pop();

    if (top === "(") {
      openCount++;
    } else if (top === "*") {
      if (openCount > 0) {
        openCount--;
      }
    }
  }

  // If all the '(' symbols are matched with either ')' or '*', the string is valid
  return openCount === 0;
}

// Test the function
const s = "()";
const isValidString = isValid(s);
console.log(isValidString);
