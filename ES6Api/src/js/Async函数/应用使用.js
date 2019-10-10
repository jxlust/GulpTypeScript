// 1、顺序执行动画
async function chainAnimationsAsync(elem, animations) {
    let ret = null;
    try {
        for (let anim of animations) {
            ret = await anim(elem);
        }
    } catch (error) {
        //忽略错误继续执行
    }
    return ret;
}

//2、优化继发，若改成并发没有影响的话
async function loginOrder(urls) {
    for (let url of urls) {
        let response = await fetch(url);
        let txt = await response.text();
    }
}

//改成并发
function getRes(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`url---${url.id}`)
        }, url.duration);
    })
}
async function loginOrder2(urls) {
    const txtPromises = urls.map(async url => {
        let response = await getRes(url);
        return response;
    })
    for (let txt of txtPromises) {
        console.log('txtPromise:', await txt);
    }
}
const urls = [{
    id: 1,
    duration: 5000
}, {
    id: 2,
    duration: 1000
}, {
    id: 3,
    duration: 3000
}]

let mapUrls = urls.map(async url => {
     return url.id + '0000';
})

console.log(mapUrls);

loginOrder2(urls);