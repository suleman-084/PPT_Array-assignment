{
  /* <aside>
💡 **Question 5**

You are given a string **S**, the task is to reverse the string using stack.

**Example 1:**

```
Input: S="GeeksforGeeks"
Output: skeeGrofskeeG
```

</aside>
 */
}

function reverseString(S) {
  const stack = [];

  // Push each character of the string into the stack
  for (let i = 0; i < S.length; i++) {
    stack.push(S[i]);
  }

  let reversedString = "";

  // Pop each character from the stack to construct the reversed string
  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Example usage:
const S = "GeeksforGeeks";
console.log(reverseString(S)); // Output: skeeGrofskeeG
