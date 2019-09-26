function* fA() {
    yield 'a';
    yield 'b';
}

function* fB() {
    yield '1';
    yield fA();
    yield '2';
}
let fb = fB();
console.log('', fb.next().value);
console.log('', fb.next().value); //遍历器实例对象
console.log('', fb.next().value);

function* fC() {
    yield 1;
    yield* fA();
    yield 2;
}
let fc = fC();
console.log('fc', fc.next());
console.log('fc', fc.next());
console.log('fc', fc.next());
console.log('fc', fc.next());
console.log('fc', fc.next());

function* concat(iter1, iter2) {
    yield* iter1;
    yield* iter2;
}
// 实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。
// 原生具备 Iterator 接口的数据结构如下。
// Array
// Map
// Set
// String
// TypedArray（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_%E5%AF%B9%E8%B1%A1）
// 函数的 arguments 对象
// NodeList 对象

function* fD() {
    yield*[1, 2, 3]
}
let fd = fD();
console.log(fd.next());
console.log(fd.next());
console.log(fd.next());

//yield* return的用法
function* foo() {
    yield 1;
    yield 2;
    return 'ok';
}

function* getFoo(iterator) {
    let r = yield* iterator;
    console.log('result:', r);
}
console.log([...getFoo(foo())]);


// yield*命令可以很方便地取出嵌套数组的所有成员。
function* myFlat(arr) {
    if (Array.isArray(arr)) {
        for (let i of arr) {
            yield* myFlat(i);
        }
    } else {
        yield arr;
    }
}
console.log('myFlat:', [...myFlat([1, 2, [3, 4, 5, [100, 99]]])]);



