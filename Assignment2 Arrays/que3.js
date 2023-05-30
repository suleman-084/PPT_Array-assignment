// Question 3
// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

function findLHS(nums) {
  const numCounts = new Map();
  let longestSubsequence = 0;

  // Count the frequency of each number
  for (let num of nums) {
    numCounts.set(num, (numCounts.get(num) || 0) + 1);
  }

  // Check each number and its adjacent numbers
  for (let [num, count] of numCounts) {
    if (numCounts.has(num + 1)) {
      longestSubsequence = Math.max(
        longestSubsequence,
        count + numCounts.get(num + 1)
      );
    }
  }

  return longestSubsequence;
}

// Example usage
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findLHS(nums);
console.log(result); // Output: 5
