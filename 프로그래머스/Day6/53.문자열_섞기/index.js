const solution = (str1, str2) => {
  let arr = "";
  for (let i = 0; i < str1.length; i++) {
    arr += str1[i] + str2[i];
  }

  return arr;
};

console.log(solution("aaaaa", "bbbbb")); // 'ababababab'

// Another Solution 1
// function solution(str1, str2) {
//   return [...str1].map((x, idx)=> x+str2[idx]).join("");
// }

// Another Solution 2
// function solution(str1, str2) {
//   return [...str1].reduce((prev, char, i) => prev + char + str2[i], '');
// }
