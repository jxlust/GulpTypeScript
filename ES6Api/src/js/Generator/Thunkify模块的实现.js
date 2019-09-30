// thunkify源码
//采用的是回调函数实现
function thunkify(fn) {
    return function () {

        var args = new Array(arguments.length);
        var ctx = this;

        for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
        }

        // let args = [...arguments];
        return function (done) {
            var called;

            args.push(function () {
                if (called) return;
                called = true;
                done.apply(null, arguments);
            });

            try {
                fn.apply(ctx, args);
            } catch (err) {
                done(err);
            }
        }
    }
};

function read(str, callback) {
    setTimeout(() => {
        console.log('str', str);
        callback(str);
        return '-----' + str;
    }, 1000);
}
let thunkRead = thunkify(read);

function* gen() {
    let y1 = yield thunkRead('1.txt');
    console.log(1, y1);
    let y2 = yield thunkRead('2.txt ------ ' + y1);
    console.log(2, y2);
}
//1.下面尝试手动执行
// let g = gen();
// let res = g.next(); //res.value 是一个function();
// console.log('function' === typeof res.value); //true
// function isValueFunction(obj) {
//     return 'function' === typeof obj.value;
// }
// if (isValueFunction(res)) {
//     res.value(function (data) {
//         let res2 = g.next(data);
//         if (isValueFunction(res2) && !res2.done) {
//             res2.value(function (data) {
//                 let res3 = g.next(data);
//                 if(!res3.done){
                    
//                 }else{
//                     return;
//                 }
//             })
//         } else {
//             return res2.value;
//         }

//     })
// }
//2.发现是可以用递归
/**
 * 这个需要封装的自动运行异步遍历器
 * @param {*} fn Generator函数
 */
function run(fn) {
    let g = fn();
    function next(data) {
        // if(error) throw new Error(error);
        let res = g.next(data);
        if(res.done){
            return undefined;
        }
        res.value(next);
    }
    next();
}

run(gen);

//thunkify是回调函数的实现方式，同理promise一样支持


