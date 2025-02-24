const solution = (nums) => {
  let res = 0;
  const str = nums.join("");
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) === 7) {
      res += 1;
    }
  }
  return res;
};

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0

// Another Solution
// const solution = (array) => array.join('').split('7').length-1;
