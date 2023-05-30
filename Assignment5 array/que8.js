//  **Question 8**

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    // If the changed array has an odd length, it cannot be a doubled array
    return [];
  }

  const freqMap = new Map();
  const original = [];

  // Count the frequency of each element in the changed array
  for (const num of changed) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Iterate over the changed array to reconstruct the original array
  for (const num of changed) {
    if (freqMap.get(num) === 0) {
      // If the current element is already used in the original array
      // or it cannot be doubled to form an element in the original array,
      // skip to the next iteration
      continue;
    }

    // Check if twice the value of the current element exists in the freqMap
    const doubledNum = num * 2;
    if (!freqMap.has(doubledNum) || freqMap.get(doubledNum) === 0) {
      // If twice the value of the current element is not found or it is already used,
      // the changed array is not a doubled array
      return [];
    }

    // Append the current element to the original array
    original.push(num);

    // Decrease the frequency of the current element and its doubled value
    freqMap.set(num, freqMap.get(num) - 1);
    freqMap.set(doubledNum, freqMap.get(doubledNum) - 1);
  }

  return original;
}

// Example usage
const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result); // Output: [1, 3, 4]
