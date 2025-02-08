const solution = (n, k) => {
  const arr = [];
  const num = Math.floor(n / k);

  for (let i = 1; i <= num; i++) {
    arr.push(k * i);
  }
  return arr;
};

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]

// Another Solution 1
// function solution(n, k) {
//   var answer = [];
//   for(let i = k ; i <= n; i+=k){
//       answer.push(i)
//   }
//   return answer;
// }

// Another Solution 2
// const solution=(n,k)=>Array(~~(n/k)).fill(k).map((v,i)=>v*(i+1))
