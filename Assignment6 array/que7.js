//  **Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (num <= n * n) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Traverse from right to left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // Traverse from bottom to top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}

// Test the function
const n = 3;
const matrix = generateMatrix(n);
console.log(matrix);
