// //1.解构不成功变量都是undefined
 let [a, b] = [1];
// console.log(a);
// console.log(b);
// //2.解构数组需要对象是继承 Iterator 接口
// let [x, y, z] = new Set(['a', 'b', 'c']);
// //x // "a"
// //3.默认值问题
// function f() {
//     console.log('aaa');
// }
// let [x2 = f()] = [1];
// //上面代码中，因为x能取到值，所以函数f根本不会执行。
// let [x3 = 1] = [undefined];
// //x = 1;
// let [y2 = 1] = [null];
// //y = null 
// // null不严格等于undefined。
// //默认值生效的条件是，对象的属性值严格等于undefined。

// //3.对象的解构赋值
// let {
//     bar,
//     foo
// } = {
//     foo: 'aaa',
//     bar: 'bbb'
// };
// //foo // "aaa"
// //bar // "bbb"

// let {
//     baz
// } = {
//     foo: 'aaa',
//     bar: 'bbb'
// };
// //baz // undefined
// let {
//     foo: baz
// } = {
//     foo: 'aaa',
//     bar: 'bbb'
// };
// let {
//     x: y = 1
// } = {} //y=1
// let {
//     x: y = 1
// } = {
//     x: 22
// } //y = 22
// //区分 匹配的模式的变量和真正的变量

// //4. 声明的注意
// // 因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
// let x;
// ({
//     x
// } = {
//     x: 1
// });
// //5.由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
// let arr = [1, 2, 3];
// let {
//     0: first,
//     [arr.length - 1]: last
// } = arr;
// // first  1
// // last  3
// //6.字符串
// const [a, b, c, d, e] = 'hello';
// // a  "h"
// let {
//     length: lt
// } = 'hello';

// //7.重点：函数参数的解构赋值
// ['a', 'b'].map((value, index, arr) => {
//     console.log('');
//     return '_' + value;
// });
// //['a','b'].map((value) => ('_'+value))
// //[['a','b'],['c','d']].map(([a,b]) => a + b)

// function move({
//     x = 0,
//     y = 0
// } = {}) {
//     return [x, y];
// }
// //move({x = 1}) 等价于let x=1 {x=0,y=0} = {x}
// function move({
//     x,
//     y
// } = {
//     x: 0,
//     y: 0
// }) {}
// //move({}) 等价于 ({x,y} = {}) x y都是undefined 

// //8.重点解构赋值的用途
// //8.1 交换变量的值
// let a = 1;
// let b = 2;
// [b, a] = [a, b];
// //({b:a,a:b} = {a,b});
// //8.2 从函数返回多个值
// //解构函数返回值
// // 返回一个对象
// function example() {
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// let {
//     foo,
//     bar
// } = example();
// //8.3 函数参数的定义
// // 参数是一组有次序的值
// function f([x, y, z]) {}
// f([1, 2, 3]);

// // 参数是一组无次序的值
// function f({
//     x,
//     y,
//     z
// }) {}
// f({
//     z: 3,
//     y: 2,
//     x: 1
// });
// //8.4 提取json
// let {
//     a,
//     b: number
// } = {
//     a: '粒子',
//     b: [1, 2, 3]
// }
// //8.5 函数参数的赋值
// var ajax = function (url, {
//     a = 1,
//     b = 2
// } = {}){

// }
// //8.6 遍历 Map 结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

// for (let [key, value] of map) {
//     console.log(key + " is " + value);
// }
// // 获取键名
// for (let [key] of map) {
//     // ...
// }

// // 获取键值
// for (let [, value] of map) {
//     // ...

// }
// //8.7 输入模块的指定方法
// //import {a} from '';
// //const {a,b} = require('');


// good
function divide(a, b, { option = false } = {}) {
}
