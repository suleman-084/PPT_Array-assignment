//  Question-3

// Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

// Examples:

// Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output1 : Yes

// For the given arr[], the Binary Search Tree is:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

// Input2 : arr[] = {11, 6, 13, 5, 12, 10}

// Output2 : No

// The given arr[] does not represent the level order traversal of a BST.

function canRepresentBST(arr) {
  if (arr.length === 0) {
    return true; // An empty array is a valid representation of an empty BST
  }

  let minValue = Number.NEGATIVE_INFINITY;
  let maxValue = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue || arr[i] > maxValue) {
      return false;
    }

    // Update the range for left and right subtrees
    if (i < arr.length - 1) {
      if (arr[i + 1] < arr[i]) {
        maxValue = arr[i];
      } else {
        minValue = arr[i];
      }
    }
  }

  return true;
}

// Example usage:
const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const arr2 = [11, 6, 13, 5, 12, 10];

console.log(canRepresentBST(arr1)); // Output: true
console.log(canRepresentBST(arr2)); // Output: false
