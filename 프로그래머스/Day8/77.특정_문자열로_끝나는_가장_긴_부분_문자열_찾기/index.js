const solution = (str, part) => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i + 1);

    if (newStr.includes(part)) {
      res.push(newStr);

      const addStr = str.slice(i + 1, str.length);
      if (addStr.includes(part)) continue;
      else break;
    }
  }

  return res.at(-1);
};

console.log(solution("AbCdEFG", "dE")); // 'AbCdE'
console.log(solution("AAAAaaaa", "a")); // 'AAAAaaaa'

// Another Solution
// const solution = (str, part) => str.substring(0, str.lastIndexOf(part)) + part;
