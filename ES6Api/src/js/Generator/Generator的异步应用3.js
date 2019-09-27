// 虽然 Generator 函数将异步操作表示得很简洁，但是流程管理却不方便（即何时执行第一阶段、何时执行第二阶段）。

// 1.Thunk 函数是自动执行 Generator 函数的一种方法。

//1.1 Thunk函数，编译器的“传名调用”实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。
function add(x) {
    return x + 100;
}
var y = 99;
add(y + 1);

function add2(thunk) {
    return thunk() + 100;
}
var thunk = function () {
    return (y + 1);
}
add2(thunk);

//2.js中使用把有回调函数的变成单参数形式
var fs = {
    readFile(filename, callback) {
        setTimeout(() => {
            callback('hhh' + filename);
            return true;
        }, 1000);

    }
}
var thunkFile = function (filename) {
    return function (callback) {
        return fs.readFile(filename, callback);
    }
}
var tf = thunkFile('1.txt');
var callback = function (data) {
    console.log(1111);
}
tf(callback);

//3.Thunk的实现
const MyThunk = function (fn) {
    return function (...arg) {
        return function (callback) {
            return fn.call(this, ...arg, callback);
        }
    }
}

function myAdd(x, y, callback) {
    let sum = x + y;
    setTimeout(() => {
        callback(sum);
    }, 1000);
}
let mt = MyThunk(myAdd);
console.log('return:' + mt(...[10, 9])(console.log));
