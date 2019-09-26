// 1）异步操作的同步化表达
function* loadUI() {
    showUI();
    yield loadUIDataAsynchronously(); //加载异步数据
    hideUI();
}

function showUI() {
    console.log('showUI');
}

function hideUI() {
    console.log('hideUI');
}

function loadUIDataAsynchronously() {
    setTimeout(() => {
        console.log('获取数据成功!');
        load.next();
    }, 1000);
}
let load = loadUI();
// while(!load.next().done);
load.next();

//ajax
function* main() {
    let result = yield ajaxGetData('url');
    let obj = JSON.parse(result);
    console.log('获取到请求结果:',obj);
}

function ajaxGetData(url) {
    setTimeout(() => {
        m.next('{"name":"lily","age": 10}');
    }, 5000);
}
let m = main();
m.next();

// 2）控制流管理
function* longRunningTask(value1) {
    try {
        let value2 = yield step1(value1);
        let value3 = yield step2(value2);
        let value4 = yield step3(value3);
        console.log('v4',value4);
    } catch (error) {
        
    }
}


let task = longRunningTask(1);

function scheduler(task) {
    let t = task.next(task.value);
    if(!t.done){
        task.value = t.value;
        scheduler(task);
    }
}
scheduler(task);

function step1(value) {
    console.log('打印1',value);
    return value;
}
function step2(value) {
    console.log('打印2',value);
    return value + 2;
}
function step3(value) {
    console.log('打印3',value);
    return value + 10;
}


// （3）部署 Iterator 接口 见遍历器接口iterator
// 见文件Generator的forof.js
function* entriesObj(obj) {
    for(let v of Object.keys(obj)){
        yield [v,obj[v]];
    }
}
//（4）作为数据结构
// Generator 可以看作是数据结构，更确切地说，可以看作是一个数组结构，因为 Generator 函数可以返回一系列的值，这意味着它可以对任意表达式，提供类似数组的接口。
function* read() {
    yield readFile('a.txt');
    yield readFile('b.txt');
    yield readFile('c.txt');
}


