const solution = (nums) => {
  const multi = nums.reduce((a, b) => a * b, 1);
  const sum = nums.reduce((a, b) => a + b, 0);
  const square = sum ** 2;

  return multi > square ? 0 : 1;
};

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0

// Another Solution 1
// const solution = (nums) => {
//   const [product, sum] = nums.reduce(
//     ([product, sum], n) => [product * n, sum + n],
//     [1, 0]
//   );
//   return product < sum ** 2 ? 1 : 0;
// };

// Another Solution 2
// const solution = nums => {
//   let product = 1;
//   let sum = 0;

//   for (const n of nums) {
//     product *= n;
//     sum += n;
//   }

//   return product < sum ** 2 ? 1 : 0;
// };
