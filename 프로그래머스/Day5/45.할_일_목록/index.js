// const solution = (todos, finished) => {
//   const res = [];

//   for (let i = 0; i < todos.length; i++) {
//     if (!finished[i]) {
//       res.push(todos[i]);
//     }
//   }

//   return res;

// };
//

const solution = (todos, finished) => todos.filter((_, idx) => !finished[idx]);

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
