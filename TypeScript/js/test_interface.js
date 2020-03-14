"use strict";
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter2(user3);
function getInfo(conf) {
    var info = { name: '', score: 0 };
    info.name = conf.name || '';
    info.score = conf.score ? (conf.score * 20) : 0;
    return info;
}
console.log('getinfo', getInfo({ id: 0, name: '小李子', score: 100 }));
