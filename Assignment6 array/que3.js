//  **Question 3**

// Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// **Input:** arr = [2,1]

// **Output:**

// false

function validMountainArray(arr) {
  const n = arr.length;
  let i = 0;

  // Check for increasing values
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // Check if there is a peak
  if (i === 0 || i === n - 1) {
    return false;
  }

  // Check for decreasing values
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
}

// Test the function
const arr = [2, 1];
const isValidMountain = validMountainArray(arr);
console.log(isValidMountain);
