// **Question 3**

// ****Given a positive integer, N. Find the factorial of N.

// **Example 1:**

// Input: N = 5

// Output: 120

// **Example 2:**

// Input: N = 4

// Output: 24

function factorial(N) {
  let result = 1;
  for (let i = 2; i <= N; i++) {
    result *= i;
  }
  return result;
}

// Test the function
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
