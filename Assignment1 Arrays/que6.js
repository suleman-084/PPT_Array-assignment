// **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]

// Output: true

function containsDuplicate(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }

  return false;
}

// Example usage
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true