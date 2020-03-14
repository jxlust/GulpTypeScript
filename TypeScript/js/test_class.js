"use strict";
var Student2 = /** @class */ (function () {
    function Student2(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student2;
}());
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user4 = new Student2("Jane", "M.", "User");
document.body.innerHTML = greeter3(user4);
