const solution = (strings, parts) =>
  strings
    .map((it, i) => [...it].slice(parts[i][0], parts[i][1] + 1).join(""))
    .join("");

// prettier-ignore
console.log(solution(
  ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
	[[0, 4], [1, 2], [3, 5], [7, 7]]
)); // "programmers"

// Another Solution
// const solution = (strings, parts) =>
//   parts.map(([s, e], i) => strings[i].slice(s, e + 1)).join("");
