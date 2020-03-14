"use strict";
function test1(firstName, lastName) { }
function test2(firstName, lastName) {
    console.log("22");
}
test2("a");
function test3(firstName, lastName) {
    if (firstName === void 0) { firstName = "kill"; }
    console.log(3, firstName + " --- " + lastName);
}
test3(undefined, "2");
