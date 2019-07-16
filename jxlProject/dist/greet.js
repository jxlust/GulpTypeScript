"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var say = function (str) {
    console.log("i am export say:" + str);
    return "export:" + str;
};
exports.say = say;
function saySome(str) {
    console.log("i am export saysome:" + str);
    return "export:" + str;
}
exports.saySome = saySome;
;
