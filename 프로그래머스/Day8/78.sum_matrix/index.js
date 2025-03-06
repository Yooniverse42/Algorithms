const solution = (str, part) => {
  const reversed = [...part].map((i) => (i === "A" ? "B" : "A")).join("");
  return str.includes(reversed) ? 1 : 0;
};

console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB")); // 0

// Another Solution
// function solution(str, pat) {
//     pat = pat.replaceAll('A', 'X').replaceAll('B', 'A').replaceAll('X', 'B')

//     return str.indexOf(pat) === -1 ? 0 : 1
// }
