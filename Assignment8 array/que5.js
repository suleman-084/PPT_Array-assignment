//  **Question 5**

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

// - If the group's length is 1, append the character to s.
// - Otherwise, append the character followed by the group's length.

// The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done **modifying the input array,** return *the new length of the array*.

// You must write an algorithm that uses only constant extra space.

// **Example 1:**

// **Input:** chars = ["a","a","b","b","c","c","c"]

// **Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// **Explanation:**

// The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

function compress(chars) {
  let count = 1; // Initialize count for the first character
  let index = 0; // Index to track the current position in the modified chars array

  for (let i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      // Increment count if the current character is the same as the previous one
      count++;
    } else {
      // Append the character and its count to the modified chars array
      chars[index] = chars[i - 1];
      index++;

      if (count > 1) {
        // If count is greater than 1, append the count digits to the modified chars array
        const countDigits = count.toString().split("");
        for (const digit of countDigits) {
          chars[index] = digit;
          index++;
        }
      }

      count = 1; // Reset count for the next group of consecutive repeating characters
    }
  }

  return index; // Return the new length of the modified chars array
}

// Test the function
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const newLength = compress(chars);
console.log(newLength);
console.log(chars.slice(0, newLength));
