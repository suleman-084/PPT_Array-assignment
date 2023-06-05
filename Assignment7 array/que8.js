//  **Question 8**

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// **Output:** true

function checkStraightLine(coordinates) {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const initialSlope = (y1 - y0) / (x1 - x0);

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    const slope = (y - y0) / (x - x0);

    if (slope !== initialSlope) {
      return false;
    }
  }

  return true;
}

// Test the function
const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
const isStraightLine = checkStraightLine(coordinates);
console.log(isStraightLine);
