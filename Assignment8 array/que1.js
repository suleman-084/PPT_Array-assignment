//  **Question 1**

// Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

// **Example 1:**

// **Input:** s1 = "sea", s2 = "eat"

// **Output:** 231

// **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

// Deleting "t" from "eat" adds 116 to the sum.

// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;

  // Create a 2D matrix filled with 0
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Calculate the cumulative sum of ASCII values of characters in s1
  let s1Sum = 0;
  for (let i = 0; i < m; i++) {
    s1Sum += s1.charCodeAt(i);
    dp[i + 1][0] = s1Sum;
  }

  // Calculate the cumulative sum of ASCII values of characters in s2
  let s2Sum = 0;
  for (let j = 0; j < n; j++) {
    s2Sum += s2.charCodeAt(j);
    dp[0][j + 1] = s2Sum;
  }

  // Calculate the minimum ASCII sum of deleted characters
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (s1[i] === s2[j]) {
        // If characters are equal, no deletion required
        dp[i + 1][j + 1] = dp[i][j];
      } else {
        // If characters are not equal, choose the minimum deletion
        dp[i + 1][j + 1] = Math.min(
          dp[i][j + 1] + s1.charCodeAt(i), // Delete character from s1
          dp[i + 1][j] + s2.charCodeAt(j) // Delete character from s2
        );
      }
    }
  }

  return dp[m][n];
}

// Test the function
const s1 = "sea";
const s2 = "eat";
const lowestASCIISum = minimumDeleteSum(s1, s2);
console.log(lowestASCIISum);
