//  **Question 1**

// Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

// An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

// **Example 1:**
// Input: n = 1

// Output: true

// **Example 2:**
// Input: n = 16

// Output: true

// **Example 3:**
// Input: n = 3

// Output: false

function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }

  return true;
}

// Test the function
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
