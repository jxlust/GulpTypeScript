//查看Test下的coTest.js
// require();

let p = new Promise( (resolve,reject) => {
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
console.log(p.then);
console.log(p.then(data => {
    console.log(data);
}));

//
function argTest(v1,v2,v3) {
    console.log(Array.from(arguments));
    console.log([].slice.call(arguments));

}
argTest(1,23,4);

function* Gen() {
    yield 1;
}
console.log(typeof Gen);
console.log(typeof Gen().next);

//回调Function转成Promise
function thunkFun(...arg) {
    setTimeout(() => {
        console.log(99,arg);
        // arguments.length - 1;
        callback('99')
    }, 1000);
}
thunkFun(1,2,3,function (data) {
    console.log(data);
})

