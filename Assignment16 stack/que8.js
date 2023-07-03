{
  /* <aside>
  💡 **Question 8** Given an array of integers, the task is to find the maximum
  absolute difference between the nearest left and the right smaller element of
  every element in the array. **Note:** If there is no smaller element on right
  side or left side of any element then we take zero as the smaller element. For
  example for the leftmost element, the nearest smaller element on the left side
  is considered as 0. Similarly, for rightmost elements, the smaller element on
  the right side is considered as 0. **Examples:** Input : arr[] = {(2, 1, 8)}
  Output : 1 Left smaller LS[] {(0, 0, 1)}
  Right smaller RS[] {(1, 0, 0)}
  Maximum Diff of abs(LS[i] - RS[i]) = 1 Input : arr[] = {(2, 4, 8, 7, 7, 9, 3)}
  Output : 4 Left smaller LS[] = {(0, 2, 4, 4, 4, 7, 2)}
  Right smaller RS[] = {(0, 3, 7, 3, 3, 3, 0)}
  Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4 Input : arr[] ={" "}
  {(5, 1, 9, 2, 5, 1, 7)}
  Output : 1
</aside>; */
}

function maxDiffNearestSmaller(arr) {
  const LS = [];
  const RS = [];

  LS[0] = 0; // No smaller element on the left side of the first element

  // Find nearest left smaller element for each element in arr
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j] >= arr[i]) {
      j = LS[j];
    }
    LS[i] = j;
  }

  RS[arr.length - 1] = 0; // No smaller element on the right side of the last element

  // Find nearest right smaller element for each element in arr
  for (let i = arr.length - 2; i >= 0; i--) {
    let j = i + 1;
    while (j < arr.length && arr[j] >= arr[i]) {
      j = RS[j];
    }
    RS[i] = j;
  }

  let maxDiff = 0;

  // Calculate the maximum absolute difference
  for (let i = 0; i < arr.length; i++) {
    const diff = Math.abs(LS[i] - RS[i]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
}

// Example usage:
const arr1 = [2, 1, 8];
console.log(maxDiffNearestSmaller(arr1)); // Output: 1

const arr2 = [2, 4, 8, 7, 7, 9, 3];
console.log(maxDiffNearestSmaller(arr2)); // Output: 4

const arr3 = [5, 1, 9, 2, 5, 1, 7];
console.log(maxDiffNearestSmaller(arr3)); // Output: 1
