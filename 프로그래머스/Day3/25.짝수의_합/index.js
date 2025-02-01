const solution = (n) => {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) res += i;
  }

  return res;
};

console.log(solution(10)); // 30
console.log(solution(4)); // 6
console.log(solution(3)); // 2
console.log(solution(1)); // 0

// Another Solution 1
// const solution = n => {
//   let sum = 0;
//   for (let i = 2; i <= n; i += 2) {
//     if (i % 2 === 0) sum += i;
//   }
//   return sum;
// };

// Another Solution 2
// const solution = n => {
// 	// n이 홀수인 경우가 있다.
//   const count = Math.trunc(n / 2); // 수열 항의 개수
//   return count ** 2 + count;
// };
