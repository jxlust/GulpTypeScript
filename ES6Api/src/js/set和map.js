//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56


// 去除数组的重复成员
//[...new Set(array)];
//去除字符里面重复的字符
//[...new Set('ababbc')].join('');
let deleteRepeat = (str) => [...new Set(str)].join('');
let obj = {
    [Symbol('dd')]: (str) => str
}

//Set 遍历器 keys values  entries
//Set.prototype.entries foreach for of

//而且，数组的map和filter方法也可以间接用于 Set 了。
let set = new Set([1, 2, 3]);
set.forEach((v) => console.log(v));
set = new Set([...set].map(x => x * 2));
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4, 6}

//Set很容易实现并集 交集 差集
let union = (set1, set2) => new Set([...set1, ...set2]);
let intersect = (set1, set2) => new Set([...set1].filter(v => set2.has(v)));
let difference = (set1, set2) => new Set([...set1].filter(v => !set2.has(v)));

var set1 = new Set([1, 2, 3]);
var obj = {
    num: 1
};
//同map一样效果
var setNew = Array.from(set1, function (v) {
    if (this.num === 1) {
        return 1;
    } else {
        return v;
    }
}, obj);
new Set(setNew);


//WeakSet 弱引用，只能存储对象 有has add delete三个方法
//WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
const foos = new WeakSet();
class Foo {
    constructor() {
        foos.add(this)
    }
    method() {
        if (!foos.has(this)) {
            throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
        }
    }
}
/**********************************************************/
//map数据结构
const items = [
    ['name', '张三'],
    ['title', 'Author']
];
const map = new Map();
items.forEach(
    ([key, value]) => map.set(key, value)
);
//且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数
new Map([
    ['bar', 1]
])

const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

//   [...map.keys()]
//   // [1, 2, 3]

//   [...map.values()]
//   // ['one', 'two', 'three']

//   [...map.entries()]
//   // [[1,'one'], [2, 'two'], [3, 'three']]

//   [...map]
//   // [[1,'one'], [2, 'two'], [3, 'three']]
// //   结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。

[...map].Map(([k, v]) => [k.toString().padStart(2, '0'), v + '...'])

//map转对象 如果key全是字符串的话
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

const myMap = new Map()
    .set('yes', true)
    .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }

function objToStrMap(obj) {
    let map = new Map();
    for (let v of Object.keys(obj)) {
        map.set(v, obj[v]);
    }
    return map;
}
//转成json字符串
var map = new Map([[true,1],['aa','bb']]);
JSON.stringify([...map]);
//json转map
// objToStrMap(JSON.parse(jsonStr));
//如果是个数组可以直接new Map(obj)

// WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
//一样也是弱引用，键名对象不会记录垃圾回收
//一样使用场景，存储dom,防止dom删除内存溢出
let wm = new WeakMap();
const element = document.getElementById('example');
wm.set(element, 'some information');
wm.get(element) // "some information"