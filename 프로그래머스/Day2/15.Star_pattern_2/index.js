const star2 = (n) => {
  let star = "*";
  for (let i = n; i >= 1; i--) {
    console.log(star.repeat(i));
  }
};

star2(5);
/*
 *****
 ****
 ***
 **
 *
 */

// another Solution
// const star2 = n => {
//   for (let i = 0; i < n; i++) {
//     console.log('*'.repeat(n - i));
//   }
// };
