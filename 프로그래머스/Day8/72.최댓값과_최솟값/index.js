const solution = (str) => {
  const arr = str.split(" ");

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
};

console.log(solution("1 2 3 4")); // '1 4'
console.log(solution("-1 -2 -3 -4")); // '-4 -1'
console.log(solution("-1 -1")); // '-1 -1'
