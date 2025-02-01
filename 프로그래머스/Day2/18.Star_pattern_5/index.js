const star5 = (n) => {
  let star = "*";

  for (let i = 0; i < n; i++) {
    let addStar = "*";
    console.log(" ".repeat(n - i - 1) + star.repeat(i + 1) + addStar.repeat(i));
  }
};

star5(5);

// another Solution
// const star5 = n => {
//   for (let i = 0; i < n; i++) {
//     console.log(' '.repeat(n - i - 1) + '*'.repeat(2 * i + 1));
//   }
// };
