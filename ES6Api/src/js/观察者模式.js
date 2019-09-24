const queuedObservers  = new Set();

let observe = fn => queuedObservers.add(fn);
let observable = obj => new Proxy(obj,handler);
var handler = {
    set: function (target,key,value,receiver) {
        let result = Reflect.set(...arguments);
        queuedObservers.forEach(observer  => observer());
        console.log('rr',result);
        return result;
    }
}

//观察对象
const person = observable({
    name: 'mk',
    age: 19
});
let count = 0;
function print() {
    console.log(`name: ${person.name} ---- age: ${person.age}`);
    count++;
}
observe(print);//观察者
person.name = 'zt';
person.name = 'jx';
console.log('count',count);
