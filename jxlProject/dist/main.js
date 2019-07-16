"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function getStudent(st) {
    console.log("student:" + st.name + "--" + st.age);
}
getStudent({ name: '粒子', age: 1000 });
console.log('1', greet_1.say('我是say'));
console.log('2', greet_1.saySome('我是saysome'));
