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