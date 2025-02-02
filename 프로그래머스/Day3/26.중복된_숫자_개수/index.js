const solution = (array, n) => {
  return array.filter((i) => n === i).length;
};

console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
console.log(solution([0, 2, 3, 4], 1)); // 0
