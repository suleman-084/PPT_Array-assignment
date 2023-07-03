{
  /* <aside>
💡 **Question 7**

Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.

**Examples:**

Input : ab aa aa bcd ab

Output : 3

*As aa, aa destroys each other so,*

*ab bcd ab is the new sequence.*

Input :  tom jerry jerry tom

Output : 0

*As first both jerry will destroy each other.*

*Then sequence will be tom, tom they will also destroy*

*each other. So, the final sequence doesn’t contain any*

*word.*

</aside> */
}

function countRemainingWords(sequence) {
  const stack = [];

  for (let i = 0; i < sequence.length; i++) {
    const currentWord = sequence[i];

    // Check if the current word is similar to the word at the top of the stack
    if (stack.length > 0 && stack[stack.length - 1] === currentWord) {
      stack.pop(); // Destroy the similar words
    } else {
      stack.push(currentWord); // Add the current word to the stack
    }
  }

  return stack.length;
}

// Example usage:
const sequence1 = ["ab", "aa", "aa", "bcd", "ab"];
const remaining1 = countRemainingWords(sequence1);
console.log(remaining1); // Output: 3

const sequence2 = ["tom", "jerry", "jerry", "tom"];
const remaining2 = countRemainingWords(sequence2);
console.log(remaining2); // Output: 0
