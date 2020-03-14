"use strict";
function greeter(person) {
    return "Hello, " + person;
}
var user2 = "Jane User";
var user22 = 'Li User';
document.body.innerHTML = greeter(user2);
var obj = { name: 'q', age: 2 };
for (var value in obj) {
    if (typeof obj[value] === 'object') {
        //constantize(obj[value]);
    }
}
'sss '.trim();
