const solution = (babbling) => {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let temp = babbling[i];

    for (let j = 0; j < words.length; j++) {
      temp = temp.replace(words[j], " ");
      continue;
    }

    if (temp.trim() === "") {
      count++;
    }
  }

  return count;
};

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
