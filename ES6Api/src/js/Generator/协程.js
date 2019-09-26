//协程
// 多个线程或者多个函数并行执行，但是只有一个线程或者函数处于运行状态，其他处于暂停状态，
// 如果其他线程或者函数需要执行，可以转交执行权，该线程处于暂停状态,等到稍后收回执行权的时候，再恢复执行。
// 这种可以并行执行、交换执行权的线程（或函数），就称为协程。

//如果将 Generator 函数当作协程，完全可以将多个需要互相协作的任务写成 Generator 函数，它们之间使用yield表达式交换控制权。

function main() {
    let fa = fA();
    while(!fa.next().done){

    }
}
function* fA() {
    console.log('fa work...');
    yield 1;
    yield* fB();
    console.log('fa work again...');
    yield 2;
}
function* fB() {
    console.log('fb work...');
    yield;
}
let fa = fA();
main();
// fa.next();
// fa.next();
// fa.next();
// fa.next();

