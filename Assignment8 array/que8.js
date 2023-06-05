//  **Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    let seen = new Set();

    for (let i = 0; i < s.length; i++) {
      if (seen.has(s[i])) {
        return true;
      }
      seen.add(s[i]);
    }

    return false;
  }

  let pairs = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      pairs.push([s[i], goal[i]]);
    }
  }

  if (pairs.length !== 2) {
    return false;
  }

  return pairs[0][0] === pairs[1][1] && pairs[0][1] === pairs[1][0];
}

// Test the function
const s = "ab";
const goal = "ba";
const result = buddyStrings(s, goal);
console.log(result);
