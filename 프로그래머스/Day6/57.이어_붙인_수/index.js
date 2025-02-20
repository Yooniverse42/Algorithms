const solution = (nums) => {
  const odd = [];
  const even = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      odd.push(nums[i]);
    } else {
      even.push(nums[i]);
    }
  }

  return +odd.join("") + +even.join("");
};

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581
