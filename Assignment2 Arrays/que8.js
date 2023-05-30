// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

function minimumScore(nums, k) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;
  const smallest = nums[0] + k; // Add k to the smallest element
  const largest = nums[n - 1] - k; // Subtract k from the largest element

  return Math.max(0, largest - smallest);
}

// Example usage
const nums = [1];
const k = 0;
const result = minimumScore(nums, k);
console.log(result); // Output: 0
