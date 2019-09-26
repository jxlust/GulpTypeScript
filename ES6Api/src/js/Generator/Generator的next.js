
// yield表达式本身没有返回值，或者说总是返回undefined
// next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
function* fA() {
    for (let i = 0; true; i++) {
        let r = yield i;
        console.log('fa rrrr',r);
        if (r) {
            i = -1;
        }
    }
}
let fa = fA();
// console.log(fa.next());
// console.log(fa.next());
// console.log(fa.next(true));
// console.log(fa.next());
// console.log(fa.next());

function* fB(x) {
    let y = yield(x + 1);
    let z = yield(y / 3);
    return (x + y + z);
}
let fb = fB(1);
// console.log('fb',fb.next());
// console.log('fb',fb.next(3));
// console.log('fb',fb.next(10));

// 如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层。

function wrap(fn) {
    return function (...arg) {
        //返回一个已经执行了next()的generator实例
        let f = fn(...arg);
        f.next();
        return f;
    }
}
let wrapped = wrap(function* (str) {
    console.log('i am ' + str + (yield));
    return 'done';
});
wrapped('zzzzzz').next('hhhhh'); //i am zzzzzzhhhhh


//注意next()标志到一个状态，然后暂停，之前的代码都会执行。