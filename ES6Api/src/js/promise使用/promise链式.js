
let pp1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})
let pp2 = function (data1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data1 + 100);
        }, 1000);
    })
}
//Promise.resolve(pp1).then(pp2).then((data) => console.log('result data', data));
let presult = pp1.then(pp2).then(pp2).then(data => console.log('result data', data)).catch((e) => {
    console.log('1',e);
});