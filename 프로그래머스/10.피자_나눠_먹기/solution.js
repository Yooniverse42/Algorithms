const solution = (slice, n) => {
  return Math.ceil(n / slice);
};

console.log(solution(7, 10)); // 2
console.log(solution(4, 12)); // 3
console.log(solution(2, 1)); // 1
