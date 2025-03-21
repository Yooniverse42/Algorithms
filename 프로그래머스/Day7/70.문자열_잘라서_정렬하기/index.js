const solution = (str) =>
  str
    .split("x")
    .filter((i) => i !== "")
    .sort();

console.log(solution("axbxcxdx")); // ["a","b","c","d"]
console.log(solution("dxccxbbbxaaaa")); // ["aaaa","bbb","cc","d"]
