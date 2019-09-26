// for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。

//利用generator实现斐波那契数
function* fibonacci() {
    let [curr, prev] = [1, 1];
    // for(;;){}
    //带上索引
    for (let i = 0;; i++) {
        yield [curr, i];
        [curr, prev] = [curr + prev, curr];
    }
}
for (let n of fibonacci()) {
    if (n[0] > 100) {
        break;
    }
    console.log('n:', n);
}

//Object对象没有实现iterator接口，可以用generator函数实现
function* objectEntries(obj) {
    let keys = Reflect.ownKeys(obj);
    for (let v of keys) {
        yield [v, obj[v]];
    }
}
let obj = {
    name: 'lili',
    age: 19,
    [Symbol()]: 2,
    [Symbol.for('sex')]: 0
}
let enObj = objectEntries(obj);
for (let [k, v] of enObj) {
    console.log(k, v);
}

//方法二
function* objectEntries2() {
    let keys = Object.keys(this);
    for (let v of keys) {
        yield [v, obj[v]];
    }
}
let obj2 = Object.assign({},obj);
obj2[Symbol.iterator] = objectEntries2;
for(let [k,v] of obj2){
    console.log(k,v);
}


// 除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。
function* numbers() {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}
let arr = [...numbers()];
let [v1,v2] = numbers();
let arr2 = Array.from(numbers());

