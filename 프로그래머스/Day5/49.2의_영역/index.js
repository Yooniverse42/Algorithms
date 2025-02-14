const solution = (nums) => {
  const arr = [];
  const reversedNums = [...nums].reverse();

  if (!nums.includes(2)) return [-1];

  const first = nums.findIndex((num) => num === 2);
  const second = reversedNums.findIndex((num) => num === 2);

  for (let i = first; i < nums.length - second; i++) {
    arr.push(nums[i]);
  }

  return arr;
};

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]

// Another Solution
// function solution(nums) {
//   const from = arr.indexOf(2);
//   const end = arr.lastIndexOf(2);

//   return from === -1 ? [-1] : arr.slice(from, end+1);
// }
