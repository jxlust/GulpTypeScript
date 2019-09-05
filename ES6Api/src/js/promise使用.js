function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('ee error');
        // new Error('fail xixi')
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(p1);
    }, 3000);
})
p2.then(data => {
    console.log('data:', data);
}).catch(e => {
    console.log('e', e);
})
// 上面代码中，p1是一个 Promise，3 秒之后变为rejected。
// p2的状态在 1 秒之后改变，resolve方法返回的是p1。
// 由于p2返回的是另一个 Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。
// 所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。

// 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。


// finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
Promise.resolve(1).then(result => {}).catch(error => {}).finally(() => {});

// all
let promises = [1, 2, 3, 4, 5, 6].map(v => {
    return getData(v);
})

function getData(v) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (v <= 4) {
                resolve(v + '--');
            }else{
                reject('bye');
            }
        }, 1000);
    })
}
Promise.all(promises).then(result => {
    console.log('r', result);
}).catch(e => {
    console.log('e22', e);
})

//Promise.race 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
