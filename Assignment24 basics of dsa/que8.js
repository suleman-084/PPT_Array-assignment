//  8. **Find K Closest Elements**

// Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

// An integer `a` is closer to `x` than an integer `b` if:

// - `|a - x| < |b - x|`, or
// - `|a - x| == |b - x|` and `a < b`

// **Example 1:**

// ```
// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// ```

// **Example 2:**

// ```
// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
// ```

// **Constraints:**

// - `1 <= k <= arr.length`
// - `1 <= arr.length <= 10000`
// - `arr` is sorted in **ascending** order.
// - -`10000 <= arr[i], x <= 10000`

function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  // Binary search to find the closest element to x
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) {
      left = mid;
      break;
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Set the initial range for the k closest elements
  left = Math.max(0, left - k);
  right = Math.min(arr.length - 1, left + k);

  // Narrow down the range to k closest elements
  while (right - left + 1 > k) {
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      right--;
    } else {
      left++;
    }
  }

  // Return the k closest elements
  return arr.slice(left, right + 1);
}

// Example usage:
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
// Output: [1, 2, 3, 4]

console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
// Output: [1, 2, 3, 4]
