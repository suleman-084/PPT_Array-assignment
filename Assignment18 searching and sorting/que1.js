//  1. **Merge Intervals**

// Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

// **Example 1:**

// ```
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// ```

// **Example 2:**

// ```
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// ```

// **Constraints:**

// - `1 <= intervals.length <= 10000`
// - `intervals[i].length == 2`
// - `0 <= starti <= endi <= 10000`

function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort the intervals based on start times
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];
    const prevInterval = result[result.length - 1];

    if (currInterval[0] <= prevInterval[1]) {
      // Overlapping intervals, merge them
      prevInterval[1] = Math.max(prevInterval[1], currInterval[1]);
    } else {
      // Non-overlapping interval, add it to the result
      result.push(currInterval);
    }
  }

  return result;
}

// Example usage:
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]]

const intervals2 = [
  [1, 4],
  [4, 5],
];
console.log(mergeIntervals(intervals2));
// Output: [[1, 5]]
