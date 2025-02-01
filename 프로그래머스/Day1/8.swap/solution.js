const swap = (arr, i, j) => {
  let newArr = [...arr];
  newArr[i] = arr[j];
  newArr[j] = arr[i];

  return newArr;
};

const arr = [1, 2, 3, 4];
console.log(swap(arr, 1, 2)); // [1, 3, 2, 4]

// another solution1
// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]]; // 구조 분해 할당
//   return arr;
// };

// const arr = [1, 2, 3, 4];
// const swapped = swap(arr, 1, 2);
// console.log(swapped); // [1, 3, 2, 4]
// console.log(arr === swapped); // true, 전달 받은 배열을 직접 변경

// another solution2
// const swap = (arr, i, j) => {
//   const copy = [...arr];
//   [copy[i], copy[j]] = [copy[j], copy[i]];
//   return copy;
// };

// const arr = [1, 2, 3, 4];
// const swapped = swap(arr, 1, 2);
// console.log(swapped); // [1, 3, 2, 4]
// console.log(arr === swapped); // false, 깊은 복사 후 사용. 그래서 전달 받은 배열을 변경하지 않음
