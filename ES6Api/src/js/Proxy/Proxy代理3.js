
function sum(v1,v2) {
    return v1 + v2;
}
let handler = {
    apply: function (target,ctx,arg) {
        //目标对象，上下文，参数数组
        console.log(1,target);
        console.log(2,ctx);
        console.log(3,arg);
        console.log(4,arguments);
        //Reflect 把参数传递执行原方法
        return Reflect.apply(...arguments) * 2;
    }
}
let p = new Proxy(sum,handler);
console.log('r1',p(1,1)); 
var obj = {name: 'love you'};
console.log('r2',p.call(obj,2,1));
console.log('r3',p.apply(obj,[2,1]));
