const findDivisors = (n) => {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (!(n % i)) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(findDivisors(1)); // [1]
console.log(findDivisors(15)); // [1, 3, 5, 15]
console.log(findDivisors(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)); // [1, 29]
