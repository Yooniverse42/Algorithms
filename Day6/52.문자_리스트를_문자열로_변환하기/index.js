const solution = (arr) => {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }

  return str;
};

console.log(solution(["a", "b", "c"])); // 'abc'

// const solution = (arr) => arr.join("");
