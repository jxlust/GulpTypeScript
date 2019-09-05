//Object.is();
//对待 +0 -0 和 NaN相等问题
//提出“Same-value equality”（同值相等）算法
Object.is(+0, -0) //false
Object.is(NaN, NaN) //true

//assign
const target = {
    a: 1
};
const source1 = {
    b: 2
};
const source2 = {
    c: 3
};

Object.assign(target, source1, source2);
console.log(target); //{ a: 1, b: 2, c: 3 }

//只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr, ...arr2]);

//为对象添加属性
class Point {
    constructor(x, y) {
        Object.assign(this, {
            x,
            y
        });
    }
}
//为对象添加方法
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {

    },
    anotherMethod() {

    }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {

};
SomeClass.prototype.anotherMethod = function () {

};

//   克隆对象
function clone(origin) {
    return Object.assign({}, origin);
}
//   上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。

//   不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。

function clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}
//合并多个对象
const merge =  (...sources) => Object.assign({}, ...sources);
//