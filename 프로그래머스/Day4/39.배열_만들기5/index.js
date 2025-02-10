const solution = (intStrs, k, s, l) => {
  const res = [];
  for (let i = 0; i < intStrs.length; i++) {
    const item = Array.from(intStrs[i]).splice(s, l).join("");

    if (Number(item) > k) {
      res.push(Number(item));
    }
  }

  return res;
};

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
// [56789, 99999]

// Another Solution 1
// function solution(intStrs, k, s, l) {
//     return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
// }
