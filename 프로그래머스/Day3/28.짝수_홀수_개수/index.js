const solution = (nums) => {
  const even = nums.filter((num) => num % 2 === 0).length;
  const odd = nums.length - even;

  return [even, odd];
};

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]

// Another Solution
// const solution = nums =>
//   nums.reduce((res, n) => {
//     res[n % 2] += 1;
//     return res;
//   }, [0, 0]);
