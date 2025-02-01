const sum = (n) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const sumArr = arr.reduce((acc, cur) => acc + cur, 0);

  return sumArr;
};

console.log(sum(10)); // 55
console.log(sum(2)); // 3
console.log(sum(1)); // 1

// another Solution 1
// const sum = n => Array.from({ length: n }, (_, i) => i + 1).reduce((acc, n) => acc + n, 0);

// another Solution 2
// const sum = n => (n === 1 ? 1 : sum(n - 1) + n);

// another Solution 3
// const sum = (n) => {
//   let res = 0;
//   for (let i = 1; i <= n; i++) {
//     res += i;
//   }
//   return res;
// };
