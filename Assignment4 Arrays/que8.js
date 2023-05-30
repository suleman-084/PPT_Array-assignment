// 💡 **Question 8**

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// *Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

// **Example 1:**

// **Input:** nums = [2,5,1,3,4,7], n = 3

// **Output:** [2,3,5,4,1,7]

// **Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

function shuffle(nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]); // Add xi to the result array
    result.push(nums[i + n]); // Add yi to the result array
  }

  return result;
}

// Example usage:
const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const rearrangedNums = shuffle(nums, n);
console.log(rearrangedNums); // Output: [2, 3, 5, 4, 1, 7]
