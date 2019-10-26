//并发请求url
function fetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url !== '') {
                let obj = {
                    text() {
                        return `url---${url.id}`;
                    }
                }
                resolve(obj);
            }
            reject('url error!');
        }, url.duration);
    })
}

async function loginOrder(urls) {
    try {
        const promisesTxt = urls.map(async url => {
            let ret = await fetch(url);
            console.log('ret', ret.text());
            return ret.text();
        });

        for (let p of promisesTxt) {
            //顺序打印结果await 的时间就是最长请求时间5秒，节省了大大的时间
            console.log('p', await p);
        }
    } catch (error) {
        console.log(error);
    }
}

//实现2
async function loginOrder2(urls) {
    // let startTime = new Date().getTime();
    try {
        const promises = urls.map(url => {
            return fetch(url);
        })
        let rets = await Promise.all(promises);
        console.log('rets2', rets);
        for (let r of rets) {
            console.log('rets txt', r.text());
        }

    } catch (error) {
        console.log(error);
    }
    // let endTime = new Date().getTime();
    // console.log('spend', (endTime - startTime) / 1000);
}

let urls = [{
        id: 1,
        duration: 5000
    },
    {
        id: 2,
        duration: 1000
    },
    {
        id: 3,
        duration: 3000
    },
    {
        id: 4,
        duration: 2000
    }
]

// loginOrder(urls);
loginOrder2(urls);