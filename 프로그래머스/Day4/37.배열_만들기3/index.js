const solution = (arr, intervals) => {
  const a1 = intervals[0][0];
  const b1 = intervals[0][1];
  const a2 = intervals[1][0];
  const b2 = intervals[1][1];

  const firstArr = arr.slice(a1, b1 + 1);
  const secondArr = arr.slice(a2, b2 + 1);

  return firstArr.concat(secondArr);
};

// prettier-ignore
console.log(solution([1, 2, 3, 4, 5], [[1, 3], [0, 4]]));
// [2, 3, 4, 1, 2, 3, 4, 5]

// Another Solution
// function solution(arr, intervals) {
//     const [[a,b],[c,d]] = intervals;

//     return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
// }
