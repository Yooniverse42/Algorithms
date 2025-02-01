const star1 = (n) => {
  let star = "*";

  for (let i = 1; i <= n; i++) {
    console.log(star.repeat(i));
  }
};

star1(5);
/*

 *
 **
 ***
 ****
 *****

 */

// another Solution
// const star1 = (n) => {
//   let star = "";

//   for (let i = 1; i <= n; i++) {
//     star += '*'
//     console.log(star);
//   }
// };
