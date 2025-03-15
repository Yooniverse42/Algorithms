const solution = (answers) => {
  const patterns = [
    [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = patterns.map((pattern, personIdx) => {
    let correct = 0;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === pattern[i % pattern.length]) {
        correct++;
      }
    }

    return correct;
  });

  const maxScore = Math.max(...scores);

  const winners = scores
    .map((score, idx) => (score === maxScore ? idx + 1 : 0))
    .filter((v) => v !== 0);

  return winners;
};

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]

// function solution(answers) {
//   const answer = [];
//   const a1 = [1, 2, 3, 4, 5];
//   const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   const a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
//   const a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
//   const a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
//   const max = Math.max(a1c, a2c, a3c);

//   if (a1c === max) {
//     answer.push(1);
//   }
//   if (a2c === max) {
//     answer.push(2);
//   }
//   if (a3c === max) {
//     answer.push(3);
//   }

//   return answer;
// }
