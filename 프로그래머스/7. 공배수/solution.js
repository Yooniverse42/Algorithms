const solution = (num, n, m) => (num % n === 0 && num % m === 0 ? 1 : 0);

console.log(solution(60, 2, 3));
console.log(solution(55, 10, 5));
