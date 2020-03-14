"use strict";
var Student = /** @class */ (function () {
    function Student(fiestName, lastName, newName) {
        this.firstName = fiestName;
        this.lastName = lastName;
        this.newName = newName;
    }
    Student.prototype.greeter = function () {
        return "Hello,\u60A8\u597D" + this.firstName + this.lastName;
    };
    return Student;
}());
var user = new Student("王", "小明", '');
var ele = document.body || document.documentElement;
ele.innerHTML = user.greeter();
//https://www.jianshu.com/p/4f219f20af75
