//  4. **Move all zeroes to end of array**

// Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

// **Example:**

// Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

// Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
// Output : arr[] = {1, 2, 3, 6, 0, 0, 0};

function moveZeroesToEnd(arr) {
  let readPointer = 0;
  let writePointer = 0;

  // Move all non-zero elements to the front of the array
  while (readPointer < arr.length) {
    if (arr[readPointer] !== 0) {
      arr[writePointer] = arr[readPointer];
      writePointer++;
    }
    readPointer++;
  }

  // Fill the remaining positions with zeroes
  while (writePointer < arr.length) {
    arr[writePointer] = 0;
    writePointer++;
  }

  return arr;
}

// Example usage:
const arr1 = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
console.log(moveZeroesToEnd(arr1)); // Output: [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0]

const arr2 = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(moveZeroesToEnd(arr2)); // Output: [1, 2, 4, 3, 5, 0, 0, 0]

const arr3 = [1, 2, 0, 0, 0, 3, 6];
console.log(moveZeroesToEnd(arr3)); // Output: [1, 2, 3, 6, 0, 0, 0]
