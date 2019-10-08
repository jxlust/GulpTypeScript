function sleep(interval) {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
        // setTimeout(() => {
        //     resolve();
        // }, interval);
    })
}

async function printNum() {
    for (var i = 0; i <= 10; i++) {
        console.log(i);
        await sleep(1000);
    }
}
printNum();

async function f1() {
    return await Promise.resolve('hhhh');
}
f1().then(data => console.log(data))

async function f2() {
    try {
       let e = await Promise.reject('出错了')
       
    } catch (error) {
        console.log(error);
    }
   
    return Promise.resolve('hello ok')
}

f2().then(data => console.log('f2', data)).catch(e => console.log('e', e));