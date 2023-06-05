// **Question 7**

// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

// > Input: str = “cd”
// >
// >
// > **Output:** cd dc
// >
// > **Input:** str = “abb”
// >
// > **Output:** abb abb bab bba bab bba

function swap(str, i, j) {
  const charArray = str.split("");
  const temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function permutations(str, start, end, result) {
  if (start === end) {
    result.push(str);
    return;
  }

  for (let i = start; i <= end; i++) {
    str = swap(str, start, i);
    permutations(str, start + 1, end, result);
    str = swap(str, start, i); // backtrack to restore the original string
  }
}

function printPermutations(str) {
  const result = [];
  permutations(str, 0, str.length - 1, result);
  return result;
}

// Test the function
const str1 = "cd";
console.log(printPermutations(str1)); // Output: ['cd', 'dc']

const str2 = "abb";
console.log(printPermutations(str2)); // Output: ['abb', 'bab', 'bba', 'abb', 'bab', 'bba']
