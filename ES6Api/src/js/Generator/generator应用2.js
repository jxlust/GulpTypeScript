//同步函数控制流封装

let step1 = function () {
    console.log('job1---------step1');
}
let step2 = function () {
    console.log('job1---------step2');
}

let step21 = function () {
    console.log('job2---------step1');
}
let step22 = function () {
    console.log('job2---------step2');
}
let step23 = function () {
    console.log('job2---------step3');
}

let job1 = {
    steps: [step1, step2]
   
}
let job2 = {
    steps: [step21, step22, step23]
}

function* runSteps(steps) {
    for (let i = 0; i < steps.length; i++) {
        let step = steps[i];
        yield step();
    }
}

function* runJobs(jobs) {
    for (let i = 0; i < jobs.length; i++) {
        let steps = jobs[i].steps;
        yield* runSteps(steps);
    }
}

//执行
let task = runJobs([job1,job2]);

let res = task.next();
while(!res.done){
    res  = task.next();
}