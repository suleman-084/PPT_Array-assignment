//  **Question 8**

// Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// **Examples :**

// ```
// Input : abc de
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12
// ```

function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Test the function
const str1 = "abc de";
console.log(countConsonants(str1)); // Output: 3

const str2 = "geeksforgeeks portal";
console.log(countConsonants(str2)); // Output: 12
