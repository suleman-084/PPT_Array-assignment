//  4. **Maximum Gap**

// Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

// You must write an algorithm that runs in linear time and uses linear extra space.

// **Example 1:**

// ```
// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// ```

// **Example 2:**

// ```
// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

// ```

// **Constraints:**

// - `1 <= nums.length <= 10^5`
// - `0 <= nums[i] <= 10^9`

function maximumGap(nums) {
  const n = nums.length;
  if (n < 2) {
    return 0;
  }

  let minVal = Infinity;
  let maxVal = -Infinity;

  // Find the minimum and maximum values in the array
  for (let i = 0; i < n; i++) {
    minVal = Math.min(minVal, nums[i]);
    maxVal = Math.max(maxVal, nums[i]);
  }

  const minGap = Math.ceil((maxVal - minVal) / (n - 1));
  if (minGap === 0) {
    return 0;
  }

  const bucketCount = Math.ceil((maxVal - minVal) / minGap);
  const bucketsMin = new Array(bucketCount).fill(Infinity);
  const bucketsMax = new Array(bucketCount).fill(-Infinity);

  // Distribute elements into buckets and update min/max values of each bucket
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num === minVal || num === maxVal) {
      continue;
    }
    const bucketIndex = Math.floor((num - minVal) / minGap);
    bucketsMin[bucketIndex] = Math.min(bucketsMin[bucketIndex], num);
    bucketsMax[bucketIndex] = Math.max(bucketsMax[bucketIndex], num);
  }

  let maxGap = 0;
  let prevMax = minVal;

  // Find the maximum gap between buckets
  for (let i = 0; i < bucketCount; i++) {
    if (bucketsMin[i] === Infinity && bucketsMax[i] === -Infinity) {
      continue;
    }
    maxGap = Math.max(maxGap, bucketsMin[i] - prevMax);
    prevMax = bucketsMax[i];
  }

  // Check the maximum gap between the last bucket and maxVal
  maxGap = Math.max(maxGap, maxVal - prevMax);

  return maxGap;
}

// Example usage:
const nums = [3, 6, 9, 1];
const maxGap = maximumGap(nums);
console.log(maxGap);
// Output: 3
