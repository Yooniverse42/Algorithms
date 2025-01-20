const solution = (n, k) => {
  const sheep = n * 12000;
  const drink = k * 2000;
  const service = Math.floor(n / 10) * 2000;

  return sheep + drink - service;
};

console.log(solution(10, 3)); // 124000
console.log(solution(64, 6)); // 768000

// another Solution
// function solution(n, k) {
//   k -= ~~(n / 10);
//   if (k < 0) k = 0;
//   return n * 12000 + k * 2000;
// }
