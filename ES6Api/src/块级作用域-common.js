'use strict';

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
        console.log('s', s[i]);{
            console.log('块', i);
        }
    }
    console.log('i', i);
}
//Test2();

function Test3() {
    var foo = 1;
    {
        var _foo = 10;
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
    var _aa = 'aaaa';
}
console.log('aa', aa);
