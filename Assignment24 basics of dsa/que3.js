//  3. **Majority Element**

// Given an array `nums` of size `n`, return *the majority element*.

// The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

// **Example 1:**

// ```
// Input: nums = [3,2,3]
// Output: 3
// ```

// **Example 2:**

// ```
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
// ```

// **Constraints:**

// - `n == nums.length`
// - `1 <= n <= 5 * 10^4`
// - `-10^9 <= nums[i] <= 10^9`

function majorityElement(nums) {
  let count = 0;
  let majority = null;

  for (let num of nums) {
    if (count === 0) {
      // If count is 0, set the current element as the majority candidate
      majority = num;
    }

    // If the current element is the majority candidate, increment the count
    // Otherwise, decrement the count
    count += num === majority ? 1 : -1;
  }

  return majority;
}

// Example usage:
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
