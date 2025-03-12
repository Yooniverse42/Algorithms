const sumOfDigits = (n) => {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    console.log("n % 10 :", n % 10);

    console.log("floor:", n / 10);
    n = Math.floor(n / 10);
  }

  return sum;
};

console.log(sumOfDigits(1)); // 1
console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(1010)); // 2
console.log(sumOfDigits(54321)); // 15
