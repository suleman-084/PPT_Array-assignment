//  2. **Sort Colors**

// Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// **Example 1:**

// ```
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// ```

// **Example 2:**

// ```
// Input: nums = [2,0,1]
// Output: [0,1,2]

// ```

// **Constraints:**

// - `n == nums.length`
// - `1 <= n <= 300`
// - `nums[i]` is either `0`, `1`, or `2`.

function sortColors(nums) {
  let low = 0; // Pointer for 0
  let mid = 0; // Pointer for 1
  let high = nums.length - 1; // Pointer for 2

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap nums[mid] with nums[low]
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // Move mid pointer to the next position
      mid++;
    } else if (nums[mid] === 2) {
      // Swap nums[mid] with nums[high]
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Example usage:
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
// Output: [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2);
// Output: [0, 1, 2]
