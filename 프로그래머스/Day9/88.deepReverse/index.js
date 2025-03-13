const deepReverse = (arr) => {
  if (!Array.isArray(arr)) return arr;

  return arr.map(deepReverse).reverse();
};

console.log(deepReverse([1, [2, [4, 5]]])); // [[[[5, 4], 3], 2], 1]
console.log(deepReverse(1)); // 1
console.log(deepReverse(null)); // null
console.log(deepReverse()); // undefined
