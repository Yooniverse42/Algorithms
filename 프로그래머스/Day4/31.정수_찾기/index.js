const solution = (nums, n) => {
  const hasNum = nums.includes(n);

  return +hasNum;
};

console.log(solution([1, 2, 3, 4, 5], 3)); // 1
console.log(solution([15, 98, 23, 2, 15], 20)); // 0

// Another Solution
// const solution = (nums, n) => +nums.includes(n);
