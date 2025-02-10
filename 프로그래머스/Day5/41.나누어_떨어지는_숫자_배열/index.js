const solution = (nums, divisor) => {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    const divided = nums[i] % divisor;

    if (!divided) {
      arr.push(nums[i]);
    }
  }

  return arr.length ? arr.sort((a, b) => a - b) : [-1];
};

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]

// Another Solution
// function solution(arr, divisor) {
//   var answer = arr.filter(v => v%divisor == 0);
//   return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }
