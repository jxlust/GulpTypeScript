//其实就是generator函数的语法糖
async function GetData(str) {
    const name = await getName(str);
    console.log('name', name);
    const f2 = await readFile(name);
    console.log('f2', f2);
    return f2;
}

function getName(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(str + '1.txt');
        }, 1000);
    })
}

function readFile(name, cb) {
    // setTimeout(() => {
    return '我是读取的数据' + name;
    // }, 2000);
}

GetData('读取').then(function (data) {
    console.log('data', data);
})

// 由于async函数返回的是 Promise 对象，可以作为await命令的参数
// await 正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
async function getFun() {
    await new Promise( resolve => setTimeout(resolve,1000));
}
async function printGetFun() {
    await getFun();
    console.log('hhhh');
}

async function getNames(str) {
   let v = await new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(str + '1.txt');
        }, 1000);
    })
    console.log('v',v);
    return v;
}

getNames('哈哈').then(data => console.log(111,data));