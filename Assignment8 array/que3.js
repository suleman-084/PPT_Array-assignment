//  **Question 3**

// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

// In one **step**, you can delete exactly one character in either string.

// **Example 1:**

// **Input:** word1 = "sea", word2 = "eat"

// **Output:** 2

// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

function minSteps(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D array to store the lengths of the common subsequences
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // Calculate the lengths of the common subsequences
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The minimum steps required is the difference between the total lengths and the length of the LCS
  return m + n - 2 * dp[m][n];
}

// Test the function
const word1 = "sea";
const word2 = "eat";
const steps = minSteps(word1, word2);
console.log(steps);
