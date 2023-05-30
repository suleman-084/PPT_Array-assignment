// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

function maximumProduct(nums) {
  nums.sort((a, b) => b - a); // Sort the array in descending order
  const n = nums.length;

  // Return the maximum of two cases:
  // 1. The product of the three largest numbers
  // 2. The product of the two smallest numbers and the largest number
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[n - 1] * nums[n - 2]
  );
}

// Example usage
const nums = [1, 2, 3];
const result = maximumProduct(nums);
console.log(result); // Output: 6
