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
