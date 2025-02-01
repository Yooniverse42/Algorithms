const star3 = (n) => {
  let star = "*";
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + star.repeat(i)); // 콤마가 아닌 플러스로 문자열 연결해야함.
  }
};

star3(5);
