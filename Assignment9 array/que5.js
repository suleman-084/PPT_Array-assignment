//  **Question 5**

// Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

// **Example 1:**

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: 8

// **Example 2:**

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: 45

function findMax(arr, index, max) {
  if (index >= arr.length) {
    return max;
  }

  if (arr[index] > max) {
    max = arr[index];
  }

  return findMax(arr, index + 1, max);
}

// Test the function
console.log(findMax([1, 4, 3, -5, -4, 8, 6], 0, Number.NEGATIVE_INFINITY)); // 8
console.log(findMax([1, 4, 45, 6, 10, -8], 0, Number.NEGATIVE_INFINITY)); // 45
