const solution = (names) => {
  const res = [];

  for (let i = 0; i < names.length; i += 5) {
    res.push(names[i]);
  }

  return res;
};

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
); // ["nami", "vex"]
