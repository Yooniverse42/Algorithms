const solution = (nums) => {
  let arr = Array(Math.max(...nums) + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]]++;
  }

  const first = arr.indexOf(Math.max(...arr));
  const last = arr.lastIndexOf(Math.max(...arr));

  return first === last ? first : -1;
};

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1

// Another Solution
// function solution(array) {
//   let m = new Map();

//   for (let n of array) m.set(n, (m.get(n) || 0) + 1);

//   m = [...m].sort((a, b) => b[1] - a[1]);

//   return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }
