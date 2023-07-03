//  **6. Merge two sorted arrays**

// Given two sorted arrays, the task is to merge them in a sorted manner.

// **Examples:**

// > Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8}
// Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

// Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
// Output: arr3[] = {4, 5, 7, 8, 8, 9}
// >

function mergeArrays(arr1, arr2) {
  const n1 = arr1.length;
  const n2 = arr2.length;
  const arr3 = [];

  let i = 0,
    j = 0,
    k = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      arr3[k] = arr1[i];
      i++;
    } else {
      arr3[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr3[k] = arr1[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr3[k] = arr2[j];
    j++;
    k++;
  }

  return arr3;
}

// Example usage:
const arr1 = [1, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 4, 5, 6, 8]

const arr3 = [5, 8, 9];
const arr4 = [4, 7, 8];
console.log(mergeArrays(arr3, arr4)); // Output: [4, 5, 7, 8, 8, 9]
