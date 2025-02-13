const solution = (nums) => nums.findIndex((num) => num < 0);

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1
