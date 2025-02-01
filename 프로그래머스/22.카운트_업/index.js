const solution = (start, end) => {
  const arr = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return arr;
};

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
