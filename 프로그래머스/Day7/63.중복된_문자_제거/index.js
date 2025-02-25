const solution = (str) => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.includes(str[i]) && arr.indexOf(str[i]) !== -1) {
      arr.splice(i, 1);
    } else {
      arr.push(str[i]);
    }
  }

  return arr.join("");
};

console.log(solution("people")); // 'peol'
console.log(solution("We are the world")); // 'We arthwold'

// Another Solution
// function solution(str) {
//     return [...new Set(str)].join('');
// }
