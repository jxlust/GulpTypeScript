let s1 = Symbol('foo');
let s2 = Symbol('bar');
s1 // Symbol(foo)
s2 // Symbol(bar)
typeof s1 //symbol


//获取描述 实例属性description，直接返回 Symbol 的描述。
const sym = Symbol('foo');
sym.description // "foo"

//属性定义symbol
let mySymbol = Symbol();
//方法一
let obj = {};
obj[mySymbol] = 'hello';
//方法二
let obj2 = {
   [mySymbol]: 'hello';
}

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

