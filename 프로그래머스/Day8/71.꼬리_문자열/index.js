const solution = (strList, ex) =>
  strList.filter((i) => !i.includes(ex)).join("");

console.log(solution(["abc", "def", "ghi"], "ef")); // 'abcghi'
console.log(solution(["abc", "bbc", "cbc"], "c")); // ''
