//具体查看mdn文档 object.create
//原型链继承的new
let A = function () {
    this.a = 1;
}
A.prototype.show = function () {
    console.log(this.a);
}
let objA = new A();
objA.a = 123;
objA.show();
//new实际操作
// 实例的原型链指向了A的原型对象
// let objA = {};
// A.apply(objA);
// objA.__proto__ = A.prototype;

//create
// let B =  {
//     a: 1,
//     showmsg() {
//         console.log(this.a);
//     }
// }
function B() {
    this.a = 1;
}
B.prototype.showmsg = function () {
    console.log(this.a);
}

let objB = Object.create(B.prototype);
objB.a = 222;

objB.showmsg();

//实际操作
// function createB() {
//     let obj = function () {};
//     obj.prototype = B;
//     return new obj();
// }
Object.prototype.create = function (Test) {
    var F = function () {};
    F.prototype = Test;
    return new F();
}