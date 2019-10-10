let demo1 = {
  name: 'hhh',
  say: function (msg, num) {
    console.log('i love' + this.name + '---' + msg + '---' + num);
  }
}
demo1.say('zz');
let obj1 = {
  name: 'lili'
}
let fn = demo1.say.bind(obj1, 'pppp');
fn('666');

//call apply
let d = demo1.say.call(obj1, 'jxl');
console.log(111, d);

function funA(a, b) {
  console.log(a, b, this);
  return this.aa + a + b;
}
const objA = {
  aa: 100,
  // 这是因为对象不构成单独的作用域，导致箭头函数定义时的作用域就是全局作用域。
  // myFun: (...params) =>{console.log('t:',this.aa); return funA.apply(this, params)}
  myFun: function (...params) {
    console.log('t',this.aa);
    return funA.apply(this, params);
  }
}
// function objA() {
//   this.aa = 100;
//   this.myFun = (...params) => funA.apply(this, params);  
// }
// console.log('obja:',new objA().myFun(1,2));

console.log('obja:',objA.myFun(1,2));
const myFun = (...params) => funA.apply(this, params);