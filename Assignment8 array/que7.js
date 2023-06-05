//  **Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

function decodeString(s) {
  const stack = [];

  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
    } else {
      let currStr = "";

      while (stack.length && stack[stack.length - 1] !== "[") {
        currStr = stack.pop() + currStr;
      }

      stack.pop(); // Remove the '['

      let num = "";

      while (stack.length && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }

      num = parseInt(num);

      let decodedStr = "";

      for (let i = 0; i < num; i++) {
        decodedStr += currStr;
      }

      stack.push(...decodedStr.split(""));
    }
  }

  return stack.join("");
}

// Test the function
const s = "3[a]2[bc]";
const decodedString = decodeString(s);
console.log(decodedString);
