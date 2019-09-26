function* fA() {
    this.ff = 100;
    yield this.a = 1;
    yield this.b = 2;
}
//遍历器generator函数执行返回的是一个遍历器fA()
let fa = fA.call(fA.prototype);

// fa.next();
// fa.next();
// console.log(fa.a);
// console.log(fa.b);

function FFA() {
    return fA.call(fA.prototype);
}
let ffa = new FFA();
console.log(ffa.ff);//undefined
ffa.next();
console.log(ffa.ff);//100
console.log(ffa.a);//1
console.log(ffa.b);//undefined