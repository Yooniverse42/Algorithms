const solution = (money) => {
  const coffee = 5500;

  const share = Math.trunc(money / coffee);
  const rest = money % coffee;

  return [share, rest];
};

console.log(solution(5500));
console.log(solution(15000));
console.log(solution(1000));
