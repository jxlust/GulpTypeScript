
//尾递归优化
function Fibonacci(num, s1 = 1, s2 = 1) {
  if (num <= 2) {
    return s2;
  } else {
    num = num - 1;
    return Fibonacci(num, s2, s1 + s2);
  }
}
console.log(Fibonacci(10));
for (let i = 1; i < 100; i++) {
  // console.log(Fibonacci(i));
}
