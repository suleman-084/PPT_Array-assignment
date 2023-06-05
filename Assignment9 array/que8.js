//  **Question 8**

// Given an array, find a product of all array elements.

// **Example 1:**

// Input  : arr[] = {1, 2, 3, 4, 5}
// Output : 120
// **Example 2:**

// Input  : arr[] = {1, 6, 3}
// Output : 18

function findProduct(arr) {
  let product = 1;

  // Iterate over each element in the array and multiply it with the running product
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

// Test the function
console.log(findProduct([1, 2, 3, 4, 5])); // Output: 120
console.log(findProduct([1, 6, 3])); // Output: 18
