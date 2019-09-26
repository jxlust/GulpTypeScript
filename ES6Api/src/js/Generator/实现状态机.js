//es5的状态机实现
let flag = true;

function clock() {
    if (flag) {
        console.log('working');
    } else {
        console.log('worked');
    }
    flag = !flag;
}
clock();
clock();
clock();

//利用generator实现，避免了全局变量flag
function* gClock() {
    while (true) {
        let i = '0';
        console.log(i);
        let y1 = yield console.log('false');
        let z = '1';
        console.log(z);
        console.log('y1',y1);
        let y2 = yield console.log('true');
        console.log('y2',y2);
    }
}
let gc = gClock();
gc.next();
gc.next('zzzzzzzzzzzz');
gc.next();

