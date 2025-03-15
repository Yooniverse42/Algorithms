const runningSum = (nums) => {
  const res = [];

  nums.reduce((acc, cur) => {
    const sum = acc + cur;
    res.push(sum);
    return sum;
  }, 0);

  return res;
};

console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]
