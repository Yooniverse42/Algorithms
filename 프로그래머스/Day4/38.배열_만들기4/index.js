const solution = (arr) => {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (!stk.length) {
      stk.push(arr[i]);
    } else if (stk.length && stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
    } else if (stk.length && stk.at(-1) >= arr[i]) {
      stk.pop();
      i--;
    }
  }
  return stk;
};

console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
