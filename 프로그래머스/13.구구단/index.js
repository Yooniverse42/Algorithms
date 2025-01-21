const printMultiplicationTable = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  arr.forEach((num) => {
    if (num === 1) return;
    console.log(`===${num}단===`);
    arr.forEach((i) => {
      console.log(`${num} * ${i} = ${num * i}`);
    });
  });
};

printMultiplicationTable();

// another Solution
// const printMultiplicationTable = () => {
//   for (let i = 2; i <= 9; i++) {
//     console.log(`===${i}단===`);

//     for (let j = 1; j <= 9; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// };
