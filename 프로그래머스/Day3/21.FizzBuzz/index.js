const fizzBuzz = (n) => {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else {
      arr.push(`${i}`);
    }
  }

  return arr;
};

console.log(fizzBuzz(3)); // ['1', '2', 'Fizz']
console.log(fizzBuzz(5)); // ['1', '2', 'Fizz', '4', 'Buzz']
console.log(fizzBuzz(20));
/* 
[
  '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', 
  '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'
]
*/

// Another Solution
// const fizzBuzz = n =>
//   Array.from({ length: n }, (_, i) =>
//     ++i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i + ''
//   );
