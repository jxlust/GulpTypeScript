//定义由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。
// 我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
let size = Symbol('size');
class Collection{
    constructor(){
        this[size] = 0;
    }
    add(item){
        this[this[size]] = item;
        this[size]++;
    }
    static sizeOf(instance){
        return instance[size];
    }
    size(){
        return this[size];
    }
}
let c = new Collection();
console.log('1',Collection.sizeOf(c))
c.add({a:'love you'});
console.log('2',Collection.sizeOf(c));
console.log('22',c.size());
console.log(c);
console.log(Object.getOwnPropertyNames(c));
console.log(Reflect.ownKeys(c));

Array.from({
    '0': 1,
    length: 1
})

