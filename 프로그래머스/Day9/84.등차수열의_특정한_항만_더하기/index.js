const solution = (a, d, included) => {
  let res = 0;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      res += a + d * i;
    }
  }

  return res;
};

console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10

// Another Solution
// const solution = (a, d, included) =>
//   included.reduce((sum, include, i) => (include ? sum + (a + d * i) : sum), 0);
