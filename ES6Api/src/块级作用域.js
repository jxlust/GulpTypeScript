var tmp = new Date();
console.log('1', tmp);

function Test1() {
    console.log('2', tmp);
    if (false) {
        var tmp = 'I love you tree thousand!';
    }
}
Test1();
var s = 'string';

function Test2() {
    for (var i = 0; i < s.length; i++) {
        console.log('s', s[i]); {
            console.log('块', i);
        }
    }
    console.log('i', i);
}
//Test2();

function Test3() {
    let foo = 1; {
        let foo = 10;
    }
    // if (true) {
    //     let foo = 10;
    // }
    console.log('foo', foo);
}
//Test3();

//IIFE （立即执行函数表达式）
(function () {
    var foo2 = 'ffff';
})();
//console.log('foo2',foo2);
{
    let aa = 'aaaa';
}
console.log('aa', aa);

/**
 *  函数作用域 ES6 的块级作用域必须有大括号，
    如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
    严格模式下，函数只能声明在当前作用域的顶层。
 */

// 第一种写法，报错
if (true) let x = 1;

// 第二种写法，不报错
if (true) {
    let x = 1;
}

// 不报错
'use strict';
if (true) {
    function f() {}
}

// 报错
'use strict';
if (true)

function f() {}