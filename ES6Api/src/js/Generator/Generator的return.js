function* fA() {
  yield 1;
  yield 2;
  yield 3;
}
let fa = fA();
console.log(fa.next());
console.log(fa.return('r'));
console.log(fa.next());


// 调用return()方法后，就开始执行finally代码块，不执行try里面剩下的代码了，然后等到finally代码块执行完，再返回return()方法指定的返回值。
function* numbers() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }

//其实next throw return
//共同点就是替换表达式
function* fTest(x) {
  try {
    let y = yield 1 + x;
    return y;
  } catch (error) {
    console.log('内部捕获', error);
  }

}
let ft = fTest(10);

// console.log('next',ft.next());
// console.log('next',ft.next('abc')); //就是把let y = yield 1 + x;替换成let y = 'abc';

// console.log('throw', ft.next());
// console.log('throw', ft.throw(new Error('none'))); //就是把let y = yield 1+1 替换成 throw new Error('none'),然后自动执行一次next();

console.log('return',ft.next());
console.log('return',ft.return(100)); //就是把let y = yield 1 + x;替换成 let y = return 100;


