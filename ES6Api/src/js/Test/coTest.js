//  import co from 'co';
let co = require('co');
console.log(co);

function read1(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('读取文件a' + str);
            resolve(`读取的文件a：${str}`);
        }, 1000);
    })

}
function read2(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('读取文件b' + str);
            resolve(`读取的文件b：${str}`);
        }, 2000);
    })
}
let gen = function* () {
    let r1 = yield read1('1.txt');
    let r2 = yield read2('2.txt' + r1);
    console.log('r1:', r1);
    console.log('r2:', r2);
    return 100;
}
co(gen).then(data => {
    console.log(1,data);
});