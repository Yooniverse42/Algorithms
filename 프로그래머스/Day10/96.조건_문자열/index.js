const solution = (ineq, eq, n, m) =>
  eq === "!"
    ? ineq === "<"
      ? +(n < m)
      : +(n > m)
    : ineq === "<"
    ? +(n <= m)
    : +(n >= m);

console.log(solution("<", "=", 20, 50)); // 1
console.log(solution(">", "!", 41, 78)); // 0

// Another Solution
// const operations = {
//   ">=": (n, m) => n >= m,
//   "<=": (n, m) => n <= m,
//   ">!": (n, m) => n > m,
//   "<!": (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }
