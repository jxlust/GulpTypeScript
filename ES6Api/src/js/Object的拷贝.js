const source = {
    set foo(value) {
      console.log(value);
    }
  };
  
  const target2 = {};
  Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
  Object.getOwnPropertyDescriptor(target2, 'foo')
  //写成方法
  const shallowMerge = (target, source) => Object.defineProperties(
    target,
    Object.getOwnPropertyDescriptors(source)
  );


//Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身。它是 ES6 正式推荐的设置原型对象的方法。
let proto = {b: 'i am b'};
let obj = {
    a: 'hhh',
    show: function () {
        console.log(this.b);
    }
}
Object.setPrototypeOf(obj,proto);
obj.show();
//对应Object.getPrototypeOf(obj);

Object.keys({a:1});//[a]
Object.value({a:1});// [1]
Object.entity({a:1});//[['a': 1]]

Object.fromEntries([
    ['foo', 'bar'],
    ['baz', 42]
  ])
  // { foo: "bar", baz: 42 }

// 例二
const map = new Map().set('foo', true).set('bar', false);
Object.fromEntries(map)
// { foo: true, bar: false }

// 该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象。
// Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// // { foo: "bar", baz: "qux" }