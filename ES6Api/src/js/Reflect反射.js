//新的api 对于Object上的一些方法挂载到这
// Reflect.setPrototypeOf();

// 老写法
'assign' in Object // true
// 新写法
Reflect.has(Object, 'assign') // true
// delete obj[name] 变成 Reflect.deleteProperty(Object,name);
let MyFun = function MyFun() {
    console.log('mmmmmm');
}
MyFun.apply = function () {
    console.log(111111);
}
MyFun.prototype.apply = function () {
    console.log('aaaaaa');
}
let obj = {
    name: "love you..."
}
MyFun.apply(obj,[]);
Reflect.apply(MyFun,obj,[]);

// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

