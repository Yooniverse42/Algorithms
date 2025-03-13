const flat = (arr) => {
  const res = [...arr];

  for (let i = 0; i < res.length; i++) {
    if (Array.isArray(res[i])) {
      res.splice(i, 1, ...res[i]);
    }
  }

  return res;
};

console.log(flat([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat([1, 2, 3])); // [1, 2, 3]
console.log(flat([])); // []
