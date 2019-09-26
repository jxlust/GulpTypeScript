class Tips {
    constructor() {
        // this.printName = this.printName.bind(this);
    }
    printName(name = 'pig') {
        this.printStr(`this is a ${name}`);
    }
    printStr(str) {
        console.log(str);
    }
}
// let t = new Tips();
// let {
//     printName
// } = t;
// printName('fish');

// 使用proxy
function getProxy(target) {
    const fnMap = new WeakMap();
    let handler = {
        get: function (target, key, receive) {
            const value = Reflect.get(...arguments);
            if (typeof value !== 'function') {
                return value;
            }
            if (!fnMap.has(value)) {

                fnMap.set(value, value.bind(target));
            }
            return fnMap.get(value);
        },
        // set: function (target,key,value) {

        // }
    }
    const proxy = new Proxy(target, handler);
    return proxy;
}
let t2 = new Tips();
const p = getProxy(t2);

// p.printName('11111');
// t2.printName('00000');
let {
    printName
} = p;
printName();
printName(4444);

//注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
class Util {
    static bar() {
        console.log('static bar...');
        this.baz();
    }
    static baz() {
        console.log('static baz...');
    }
    baz() {
        console.log('baz...');
    }
}
Util.bar();