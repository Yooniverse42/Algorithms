function solution(num1, num2) {
  if (num2 === 0) {
    return;
  } else {
    return num1 % num2;
  }
}

console.log(solution(3, 2));
console.log(solution(10, 5));
