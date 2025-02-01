const sum = (n, m) => {
  if (n > m) return 0;
  return ((m - n + 1) * (m + n)) / 2;
};

console.log(sum(3, 8)); // 33
console.log(sum(3, 3)); // 3
console.log(sum(3, 2)); // 0

// Another Solution 1
// const sum = (n, m) => {
//   let res = 0;
//   for (let i = n; i <= m; i++) {
//     res += i;
//   }
//   return res;
// };

// Another Solution 2
// const sum = (n, m) => {
//   if (n > m) return 0;
//   if (n === m) return n;

//   return sum(n, m - 1) + m;
// };

// Another Solution 3
// const sum = (n, m) =>
//   Array.from({ length: m - n + 1 }, (_, i) => i + n).reduce((acc, n) => acc + n, 0);
