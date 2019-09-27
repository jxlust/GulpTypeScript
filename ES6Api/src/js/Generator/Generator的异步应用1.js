// ES6 诞生以前，异步编程的方法，大概有下面四种。

// 回调函数
// 事件监听
// 发布/订阅
// Promise 对象
// Generator 函数将 JavaScript 异步编程带入了一个全新的阶段。

//回调函数
readFile1('1.txt', function (data) {
    readFile2(data, function (data2) {
        console.log(data2);
    });
})

//promise
readFile('1.txt').then(data => {
    return readFile(data);
}).then(data2 => {
    console.log(data2);
}).catch(e => {
    throw new Error(e);
})
// Promise 的最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆then，原来的语义变得很不清楚。

