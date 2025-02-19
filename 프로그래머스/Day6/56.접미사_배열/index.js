const solution = (str) => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    const strSlice = str.slice(i);
    arr.push(strSlice);
  }

  return arr.sort();
};

console.log(solution("banana"));
// ['a', 'ana', 'anana', 'banana', 'na', 'nana']
console.log(solution("programmers"));
// ['ammers', 'ers', 'grammers', 'mers', 'mmers', 'ogrammers', 'programmers', 'rammers', 'rogrammers', 'rs', 's']
