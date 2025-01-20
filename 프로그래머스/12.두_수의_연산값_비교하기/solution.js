const solution = (a, b) => {
  return Math.max(+`${a}${b}`, 2 * a * b);
};

console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
