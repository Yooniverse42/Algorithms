const solution = (num1, num2) => {
  if (num2 === 0) {
    return;
  } else {
    return Math.trunc(num1 / num2);
  }
};

console.log(solution(10, 5));
console.log(solution(7, 2));
