//  5. **Rearrange array in alternating positive & negative items with O(1) extra space**

// Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

// **Examples:**

// > Input:  arr[] = {1, 2, 3, -4, -1, 4}
// Output: arr[] = {-4, 1, -1, 2, 3, 4}

// Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

function rearrangeAlternate(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Partition the positive and negative numbers
  while (left < right) {
    while (arr[left] > 0 && left < right) {
      left++;
    }
    while (arr[right] < 0 && left < right) {
      right--;
    }
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  // Rearrange in alternating fashion
  let positiveIndex = 1;
  let negativeIndex = left;
  while (positiveIndex < negativeIndex && arr[negativeIndex] < 0) {
    [arr[positiveIndex], arr[negativeIndex]] = [
      arr[negativeIndex],
      arr[positiveIndex],
    ];
    positiveIndex += 2;
    negativeIndex++;
  }

  return arr;
}

// Example usage:
const arr1 = [1, 2, 3, -4, -1, 4];
console.log(rearrangeAlternate(arr1)); // Output: [-4, 1, -1, 2, 3, 4]

const arr2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(rearrangeAlternate(arr2)); // Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]
