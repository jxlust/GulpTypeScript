async function getData() {
    const NUM_RETRIES = 3;
    let i = 0;
    for (i = 0; i < NUM_RETRIES; i++) {
        try {
            let r = await httpGet();
            return r;
            // break;
        } catch (error) {
            console.log(error);
        }
    }
    console.log('多少次', i);

}

let count = 0;

function httpGet() {
    if (count === 2) {
        return Promise.resolve('ok');
    } else {
        count++;
        console.log('count', count);
        throw new Error('错误');
    }

}
getData().then(data => console.log('r', data));