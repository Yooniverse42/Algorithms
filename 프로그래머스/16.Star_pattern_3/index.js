const star3 = (n) => {
  let star = "*";
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i), star.repeat(i));
  }
};

star3(5);
/*
 *
 **
 ***
 ****
 *****
 */
