const star6 = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(i) + "*".repeat(2 * n - 1 - 2 * i));
  }
};

star6(5);
/*
 *********
 *******
 *****
 ***
 *
 */
