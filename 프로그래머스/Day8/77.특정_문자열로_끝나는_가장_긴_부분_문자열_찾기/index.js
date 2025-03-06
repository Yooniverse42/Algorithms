const sumMatrix = (matrix) =>
  matrix.map((i) => i.reduce((a, b) => a + b, 0)).reduce((c, d) => c + d, 0);

console.log(
  sumMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 45
console.log(sumMatrix([])); // 0
console.log(
  sumMatrix([
    [10, -10],
    [20, 30],
    [5, 5],
  ])
); // 60

// Another Solution 1
// const sumMatrix = (matrix) =>
//   matrix.reduce((sum, row) => sum + row.reduce((a, b) => a + b, 0), 0);

// Another Solution 2
// const sumMatrix = matrix => matrix.flat().reduce((sum, num) => sum + num, 0);
