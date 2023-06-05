// **Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

function findAnagrams(s, p) {
  const result = [];
  const targetCount = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);
  let left = 0;
  let right = 0;

  // Count the frequency of characters in pattern p
  for (let i = 0; i < p.length; i++) {
    targetCount[p.charCodeAt(i) - 97]++;
  }

  while (right < s.length) {
    // Expand the window by adding the current character
    const currentChar = s.charCodeAt(right) - 97;
    windowCount[currentChar]++;

    // Shrink the window if its size exceeds the length of pattern p
    if (right - left + 1 > p.length) {
      const leftChar = s.charCodeAt(left) - 97;
      windowCount[leftChar]--;
      left++;
    }

    // Check if the window contains an anagram of p
    if (
      right - left + 1 === p.length &&
      compareArrays(windowCount, targetCount)
    ) {
      result.push(left);
    }

    right++;
  }

  return result;
}

// Helper function to compare two arrays
function compareArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Test the function
const s = "cbaebabacd";
const p = "abc";
const indices = findAnagrams(s, p);
console.log(indices);
