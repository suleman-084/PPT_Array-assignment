//  **Question 4**

// Given a string calculate length of the string using recursion.

// **Examples:**

// ```
// Input : str = "abcd"
// Output :4

// Input : str = "GEEKSFORGEEKS"
// Output :13
// ```

function calculateStringLength(str) {
  if (str === "") {
    return 0; // base case: empty string has length 0
  }

  return 1 + calculateStringLength(str.slice(1)); // divide string into smaller part
}

// Test the function
console.log(calculateStringLength("abcd")); // Output: 4
console.log(calculateStringLength("GEEKSFORGEEKS")); // Output: 13
