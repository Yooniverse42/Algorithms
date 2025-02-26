const solution = (str) => str.trim().split(/\s+/);

console.log(solution(" i    love  you")); // ["i", "love", "you"]
console.log(solution("    programmers  ")); // ["programmers"]
