const solution = (str) => {
  const arr = [...str].filter((i) => !isNaN(i)).sort((a, b) => a - b);
  const arr2 = arr.map((i) => Number(i));

  return arr2;
};

console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(solution("abcde0")); // [0]

// Another Solution
// const solution = (str) =>
//   [...str]
//     .filter((i) => !isNaN(i))
//     .map((i) => Number(i))
//     .sort((a, b) => a - b);
