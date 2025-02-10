const solution = (nums) => {
  const odd = [];
  const even = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) even.push(nums[i]);
    else odd.push(nums[i]);
  }

  const oddSum = odd.reduce((a, b) => a + b, 0);
  const evenSum = even.reduce((a, b) => a + b, 0);

  return oddSum > evenSum ? oddSum : evenSum;
};

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8

// Another Solution
// const solution = (nums) => {
//   let odd = 0;
//   let even = 0;

//   nums.map((value, index) => {
//     index % 2 ? (odd += value) : (even += value);
//   });

//   return Math.max(odd, even);
// };
