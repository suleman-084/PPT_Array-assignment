//  **Question 5**

// We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

// **Examples :**

// ```
// Input  : S = "abcab"
// Output : 7
// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

// Input  : S = "aba"
// Output : 4
// The substrings are a, b, a and aba
// ```

function countContiguousSubstrings(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      if (S[i] === S[j]) {
        count++;
      }
    }
  }

  return count;
}

// Test the function
console.log(countContiguousSubstrings("abcab")); // Output: 7
console.log(countContiguousSubstrings("aba")); // Output: 4
