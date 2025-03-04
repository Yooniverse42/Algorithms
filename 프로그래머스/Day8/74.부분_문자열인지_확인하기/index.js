const solution = (str, target) => (str.includes(target) ? 1 : 0);

console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "wxyz")); // 0
