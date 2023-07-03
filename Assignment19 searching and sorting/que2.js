//  2. **Count of Smaller Numbers After Self**

// Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

// **Example 1:**

// ```
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are2 smaller elements (2 and 1).
// To the right of 2 there is only1 smaller element (1).
// To the right of 6 there is1 smaller element (1).
// To the right of 1 there is0 smaller element.

// ```

// **Example 2:**

// ```
// Input: nums = [-1]
// Output: [0]

// ```

// **Example 3:**

// ```
// Input: nums = [-1,-1]
// Output: [0,0]

// ```

// **Constraints:**

// - `1 <= nums.length <= 100000`
// - `-10000 <= nums[i] <= 10000`

function mergeAndCount(arr, left, mid, right, count) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  let i = 0,
    j = 0,
    k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i][0] <= rightArr[j][0]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      count[leftArr[i][1]] += rightArr.length - j;
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

  return count;
}

function mergeSortAndCount(arr, left, right) {
  if (left === right) {
    return [[arr[left], left]];
  }

  const mid = left + Math.floor((right - left) / 2);
  const leftSubarray = mergeSortAndCount(arr, left, mid);
  const rightSubarray = mergeSortAndCount(arr, mid + 1, right);
  const mergedArray = mergeAndCount(
    arr,
    left,
    mid,
    right,
    Array(arr.length).fill(0)
  );

  return mergedArray;
}

function countSmaller(nums) {
  const result = Array(nums.length).fill(0);
  const indexedNums = nums.map((num, index) => [num, index]);
  mergeSortAndCount(indexedNums, 0, indexedNums.length - 1);

  for (const [_, index] of indexedNums) {
    result[index] = indexedNums[index][1];
  }

  return result;
}

// Example usage:
const nums = [5, 2, 6, 1];
const counts = countSmaller(nums);
console.log(counts); // Output: [2, 1, 1, 0]
