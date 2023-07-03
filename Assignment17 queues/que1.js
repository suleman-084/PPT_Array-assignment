//  **Question 1**

// Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

// **Example 1:**

// ```
// Input: s = "leetcode"
// Output: 0

// ```

// **Example 2:**

// ```
// Input: s = "loveleetcode"
// Output: 2

// ```

// **Example 3:**

// Input: s = "aabb"
// Output: -1

function firstUniqChar(s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

const s = "leetcode";
const index = firstUniqChar(s);
console.log(index);
// Output: 0
