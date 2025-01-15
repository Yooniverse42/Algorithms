const solution = (angle) =>
  angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;

console.log(solution(70));
console.log(solution(90));
console.log(solution(91));
console.log(solution(180));

// another solution
// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle>=x).length;
// }
