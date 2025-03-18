const solution = (strings) => {
  const arr = strings.map((v) => v.length);
  const res = Array(Math.max(...arr)).fill(0);

  for (let i = 0; i < arr.length; i++) {
    res[arr[i] - 1]++;
  }

  return Math.max(...res);
};

console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2
