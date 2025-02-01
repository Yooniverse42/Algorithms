const star7 = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(n));
  }
};

star7(5);
/*
 *****
 *****
 *****
 *****
 *****
 */

// another Solution
// const star7 = n => {
//   const star = '*'.repeat(n);
//   for (let i = 0; i < n; i++) {
//     console.log(star);
//   }
// };

// star7(5);
