const star4 = (n) => {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
};

star4(5);

// another Solution
// const star4 = n => {
//   for (let i = 0; i < n; i++) {
//     console.log(' '.repeat(i) + '*'.repeat(n - i));
//   }
// };
