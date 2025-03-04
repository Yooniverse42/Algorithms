const solution = (str, n) => {
  const res = [];
  for (let i = 0; i < str.length; i += n) {
    res.push([...str].splice(i, n).join(""));
  }

  return res;
};

console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
