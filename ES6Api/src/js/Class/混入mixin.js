// Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。它的最简单实现如下。
// 1.拓展运算符简单实现
var a = {};
var b = {};
var newObj = {
    ...a,
    ...b
};

//2.mixin模式
// 将多个类的接口“混入”（mix in）另一个类。

function mix(...mixins) {
    class Mix {
        constructor() {
            for (let mixin of mixins) {
                copyProperties(this, new mixin()); // 拷贝实例属性
            }
        }
    }

    for (let mixin of mixins) {
        copyProperties(Mix, mixin); // 拷贝静态属性
        copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }
    return Mix;
}
function testMixin() {
    let Mix = mix(Array,Date);
    let m = new Mix();
    m.push(1);
    console.log('实例：',m);
    console.log('date:',Mix.now());
}
testMixin();
/**
 * 往一个对象拷贝所有的属性
 * 浅拷贝
 * @param {*} target 目标对象
 * @param {*} source 需拷贝对象
 */
function copyProperties(target, source) {

    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'construct' && key !== 'prototype' && key !== 'name') {
            //为浅拷贝
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
        }
    }
}

function testCopy() {
    let target = {
        a: 1
    };
    let source = {
        b: 2,
        c: {
            d: {
                e: 99
            }
        }
    }
    copyProperties(target, source);
    console.log(target);
    target.c.d.e = 100;
    console.log(source);
}
// testCopy();

function deepCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {};

    for (let key of Object.keys(obj)) {
        if (typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function testDeepCopy() {
    let source = {
        b: 2,
        c: {
            arr: [1, 2],
            d: {
                e: 99
            }
        }
    }
    let newObj = deepCopy(source);

    console.log('newObj:', newObj);
    newObj.c.d.e = 100;
    console.log('source:', source);
}
// testDeepCopy();