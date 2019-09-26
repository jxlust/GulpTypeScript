// Generator 函数体外抛出的错误，可以在函数体内捕获；反过来，Generator 函数体内抛出的错误，也可以被函数体外的catch捕获。

function* fA() {
    try {
        yield 1;
    } catch (e) {
        console.log('内部捕获',e);
        console.log(ee);
    }
}

let fa = fA();
try {
    fa.next();
    fa.throw(new Error('none'));
} catch (e) {
    console.log('外部捕获',e);
}

//遍历器的throw会自动执行一次next()只要 Generator 函数内部部署了try...catch代码块，那么遍历器的throw方法抛出的错误，不影响下一次遍历。

function* fB() {
    try {
        yield console.log(1);
    } catch (e) {
        console.log('内部捕获1',e);
    }
    yield console.log(2);
    yield console.log(3);
}
let fb = fB();
fb.next();//1
fb.throw(); //自动执行了一次next(); 内部捕获1 undefined ;2
fb.next(); //3