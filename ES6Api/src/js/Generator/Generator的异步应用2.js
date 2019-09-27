// 协程
// 传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做"协程"（coroutine），意思是多个线程互相协作，完成异步任务。

// 协程有点像函数，又有点像线程。它的运行流程大致如下。

// 第一步，协程A开始执行。
// 第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
// 第三步，（一段时间后）协程B交还执行权。
// 第四步，协程A恢复执行。
// 上面流程的协程A，就是异步任务，因为它分成两段（或多段）执行。

// 举例来说，读取文件的协程写法如下。
/**
 * 一个协程
 * @param {*} str 
 */
function* asyncJob(str) {
    try {
        console.log('执行一些任务...');
        let data = yield readFile(str);
        console.log('执行一些其他任务...');
        console.log('获取到数据',data);
    } catch (e) {
        console.log(1111, e);
    }
}

function readFile(str) {
    setTimeout(() => {
        console.log(`读取${str}完毕...`);
        //2.协程执行第二阶段
        //2.1 遍历器对象向内容传递数据
        job.next('我是读取文件的数据');
      
    }, 2000);
}
let job = asyncJob('1.txt'); //会返回一个内部指针（即遍历器）,指针对象
// job.next();
// job.throw(new Error('读取失败了哦!'))
// while (!job.next().done);

//1.协程执行第一阶段 
//1.1遍历器对象next();
job.next();



