//通过全局属性设置单例不好，所有文件都可以修改
// mod.js
// function A() {
//     this.foo = 'hello';
//   }
  
//   if (!global._foo) {
//     global._foo = new A();
//   }
  
//   module.exports = global._foo;


// Singleton 模式
const Foo_Key  = Symbol.for('foo');
function A() {
    this.foo = 'hello';
}
if(!global[Foo_Key]){
    global[Foo_Key] = new A();
}
module.exports = global[Foo_Key];
//导出一个单例
//仍然可以修改 
global[Symbol.for('foo')] = {};
//如果使用Symbol('foo'),在不清理缓存的情况下加载一次的情况下，不会变



//symbol 属性
//Symbol.hasInstance
//instanceof会触发属性方法执行
class Even {
    static [Symbol.hasInstance](obj) {
      return Number(obj) % 2 === 0;
    }
  }
  
  // 等同于
  const Even = {
    [Symbol.hasInstance](obj) {
      return Number(obj) % 2 === 0;
    }
  };
  
  1 instanceof Even // false
  2 instanceof Even // true
  12345 instanceof Even // false

  //对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
  //arr1[Symbol.isConcatSpreadable] // undefined
  //设置为true可以展开 false不可以展开

//衍生对象
  class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
  }
  
  const a = new MyArray();
  const b = a.map(x => x);
  
  b instanceof MyArray // false
  b instanceof Array // true

//   总之，Symbol.species的作用在于，实例对象在运行过程中，需要再次调用自身的构造函数时，会调用该属性指定的构造函数。
// 它主要的用途是，有些类库是在基类的基础上修改的，那么子类使用继承的方法时，作者可能希望返回基类的实例，而不是子类的实例。



//Symbol.match
//对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
class MyMatch{
    [Symbol.match](str){
        return 'hell world'.indexOf(str);
    }
}
'e'.match(new MyMatch())

//Symbol.replace
const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'World') // ["Hello", "World"]
// Symbol.replace方法会收到两个参数，第一个参数是replace方法正在作用的对象，上面例子是Hello，第二个参数是替换后的值，上面例子是World。

String.prototype.split(separator, limit)
// 等同于
separator[Symbol.split](this, limit)
