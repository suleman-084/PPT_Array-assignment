//  **Question 4**

// Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

// **Example 1 :**

// Input: N = 5, P = 2

// Output: 25

// **Example 2 :**
// Input: N = 2, P = 5

// Output: 32

function calculateExponent(N, P) {
  return Math.pow(N, P);
}

// Test the function
console.log(calculateExponent(5, 2)); // 25
console.log(calculateExponent(2, 5)); // 32
