// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 && // Check if the current plot is empty
      (i === 0 || flowerbed[i - 1] === 0) && // Check if the previous plot is empty (or it's the first plot)
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // Check if the next plot is empty (or it's the last plot)
    ) {
      flowerbed[i] = 1; // Plant a flower in the current plot
      count++; // Increment the count of planted flowers

      if (count >= n) {
        return true; // If the required number of flowers are planted, return true
      }
    }

    i++; // Move to the next plot
  }

  return false; // If we reach here, it means we couldn't plant enough flowers
}

// Example usage
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
const result = canPlaceFlowers(flowerbed, n);
console.log(result); // Output: true
