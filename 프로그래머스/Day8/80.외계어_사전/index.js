const solution = (spell, dic) => {
  let count = 0;

  for (let i = 0; i < dic.length; i++) {
    let word = dic[i];

    for (let j = 0; j < spell.length; j++) {
      if (!dic[i].includes(spell[j])) {
        word = 1;
        break;
      } else {
        word = 2;
      }
      continue;
    }

    if (word === 2) count++;
  }

  return count === 0 ? 2 : 1;
};

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); // 2

// Another Solution
// function solution(spell, dic) {
//   return dic.some((i) => spell.sort().toString() == [...i].sort().toString())
//     ? 1
//     : 2;
// }
