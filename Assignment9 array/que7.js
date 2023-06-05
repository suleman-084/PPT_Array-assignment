//  **Question 7**

// Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***

// *S = “ABC”*

// ***Output:***

// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***

// *S = “XY”*

// ***Output:***

// *“XY”, “YX”*

function permuteString(str) {
  const result = [];

  // Convert the input string into an array for easier manipulation
  const chars = str.split("");

  // Helper function to generate permutations
  function generatePermutations(startIndex) {
    if (startIndex === chars.length - 1) {
      // Base case: Reached the end of the string, add the permutation to the result
      result.push(chars.join(""));
    } else {
      // Generate permutations by swapping each character with the characters after it
      for (let i = startIndex; i < chars.length; i++) {
        // Swap characters
        [chars[startIndex], chars[i]] = [chars[i], chars[startIndex]];
        // Recursively generate permutations for the remaining characters
        generatePermutations(startIndex + 1);
        // Restore the original order by swapping the characters back
        [chars[startIndex], chars[i]] = [chars[i], chars[startIndex]];
      }
    }
  }

  // Start the permutation generation from the first character
  generatePermutations(0);

  return result;
}

// Test the function
console.log(permuteString("ABC")); // ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(permuteString("XY")); // ["XY", "YX"]
