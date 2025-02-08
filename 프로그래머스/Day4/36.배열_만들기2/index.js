const solution = (l, r) => {
  const arr = [];

  for (let i = l; i <= r; i++) {
    if (/^[05]+$/.test(String(i))) {
      arr.push(i);
    }
  }
  return arr.length === 0 ? [-1] : arr;
};

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]

// Another Solution
// function solution(l, r) {
//   const result = [];

//   for (let i = l; i <= r; i++) {
//       if ([...String(i)].every(num => num === "0" || num === "5")) {
//           result.push(i);
//       }
//   }

//   return result.length > 0 ? result : [-1];
// }
