const solution = (nums) => {
  return nums.map((num) => num * 2);
};

console.log(solution([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log(solution([1, 2, 100, -99, 1, 2, 3])); // [2, 4, 200, -198, 2, 4, 6]

// Another Solution
// const solution = nums => {
//   const res = [];
//   for (const n of nums) res.push(n * 2);
//   return res;
// };
