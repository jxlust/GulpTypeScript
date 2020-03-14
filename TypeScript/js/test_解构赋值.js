"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
{
    var input = void 0;
    input = ['a', 1, 'bb', 2];
    var first = input[0], last = input[1];
    console.log('first', first);
    console.log('last', last);
    var o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    //let { a, b } = o;
    var a = o.a, passthrough = __rest(o, ["a"]);
    var total = passthrough.b + passthrough.c.length;
    //let { a: newName1, b: newName2 } = o;
    var newName1 = o.a, newName2 = o.b;
    console.log('new', newName1 + "-" + newName2 + " ");
    console.log('new2', a + " ");
    //展开表达式
    var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    var search = __assign({ food: "rich" }, defaults);
    // let first = [1, 2];
    // let second = [3, 4];
    // let bothPlus = [0, ...first, ...second, 5];
    //这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。
}
function f(_a) {
    var _b = _a === void 0 ? ['a', 1] : _a, first = _b[0], second = _b[1];
    console.log(first);
    console.log(second);
}
f();
function f2(_a) {
    var _b = _a === void 0 ? { first: '小流年', second: 12 } : _a, first = _b.first, second = _b.second;
    console.log(first);
    console.log(second);
}
f2({ first: 'b' });
function f3(_a) {
    var first = _a[0], second = _a.slice(1);
    console.log(first);
    console.log(second);
}
f3([1, 234]);
