function* generatorFun() {
    yield 'hellow';
    yield 'world';
    return 'ending'
}
let gf = generatorFun();
console.log(gf.next());
console.log(gf.next());
console.log(gf.next());
console.log(gf.next());


let myObj = {
    a: 1
};
// console.log( [...myObj]);
myObj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
}
console.log([...myObj]);
// Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
function* print() {
    console.log('hello');
}
let pt = print();
setTimeout(() => {
    pt.next();
}, 1000);
