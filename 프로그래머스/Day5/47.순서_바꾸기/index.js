const solution = (nums, n) => nums.splice(n).concat(nums);

// const solution = (nums, n) => {
//   const arr = nums.splice(n);

//   return arr.concat(nums);
// };

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]
