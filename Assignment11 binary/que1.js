{
  /* <aside>
💡 **Question 1**

Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

```

**Example 2:**

</aside> */
}

function mySqrt(x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right; // Return the rounded down square root
}
