const solution = (a, b) => {
  return Math.max(+`${a}${b}`, +`${b}${a}`);
};

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
