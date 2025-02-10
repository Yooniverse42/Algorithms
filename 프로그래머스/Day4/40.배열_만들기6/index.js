const solution = (arr) => {
  const stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (!stk.length) {
      stk.push(arr[i]);
    } else if (stk.length && stk.at(-1) === arr[i]) {
      stk.pop();
    } else if (stk.length && stk.at(-1) !== arr[i]) {
      stk.push(arr[i]);
    }
  }

  return stk.length ? stk : [-1];
};

console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); // [0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); // [-1]
