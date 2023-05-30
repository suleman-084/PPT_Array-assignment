// **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// **Example 1:**
// Input: nums = [1,2,2,4]
// Output: [2,3]

function findErrorNums(nums) {
  const n = nums.length;
  const freqMap = {}; // Frequency map to count occurrences of each number
  let duplicate, missing;

  // Populate the frequency map and find the duplicate
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    freqMap[num] = (freqMap[num] || 0) + 1;
    if (freqMap[num] === 2) {
      duplicate = num;
      break;
    }
  }

  // Find the missing number
  for (let i = 1; i <= n; i++) {
    if (!freqMap[i]) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}

// Example usage
const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3]
