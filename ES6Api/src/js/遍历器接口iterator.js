function makeIterator(arr) {
    let index = 0;
    return {
        next: function () {
            return (index < arr.length) ? {
                value: arr[index++],
                finished: false
            } : {
                value: undefined,
                finished: true
            };
        }
    }
}
let it = makeIterator([1, 2]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
var objSimple = {

    next: function () {
        return (index < arr.length) ? {
            value: arr[index++]
        } : {
            done: true
        };
    }
}
var obj = {
    [Symbol.iterator]: function () {
        return objSimple;
    }
}

function* entries(obj) {
    for (let v of Object.keys(obj)) {
        yield [v, obj[v]];
    }
}
var eObj = {
    name: 'li',
    age: 21,
    num: 19
}
for (let [k, v] of entries(eObj)) {
    console.log(k, '-', v);
}