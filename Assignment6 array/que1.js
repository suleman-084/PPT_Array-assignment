// **Question 1**

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]

function findPermutation(s) {
  const n = s.length;
  let result = [];
  let low = 0;
  let high = n;

  for (let i = 0; i <= n; i++) {
    if (i === n || s[i] === "I") {
      for (let j = i; j >= low; j--) {
        result.push(high);
        high--;
      }
      low = i + 1;
    }
  }

  return result;
}

// Test the function
const s = "IDID";
const permutation = findPermutation(s);
console.log(permutation);
