const solution = (str, num1, num2) => {
  let arr = [...str];
  arr[num1] = str[num2];
  arr[num2] = str[num1];
  // [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
};

console.log(solution("hello", 1, 2)); // 'hlelo'
console.log(solution("I love you", 3, 6)); // 'I l veoyou'
