const solution = (nums) => nums.sort((a, b) => a - b).slice(5);

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
// [15, 32, 38, 46, 56]
