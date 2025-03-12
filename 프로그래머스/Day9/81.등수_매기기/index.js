/*혼자 못풀었던 문제*/
const solution = (scores) => {
  const avg = scores.map((v) => (v[0] + v[1]) / 2);

  const sorted = avg.slice().sort((a, b) => b - a);

  return avg.map((v) => sorted.indexOf(v) + 1);
};

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
[1, 2, 4, 3];
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);

[4, 4, 6, 2, 2, 1, 7];
