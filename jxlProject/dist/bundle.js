(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function getStudent(st) {
    console.log("student:" + st.name + "--" + st.age);
}
getStudent({ name: '粒子', age: 1000 });
console.log('1', greet_1.say('我是say'));
console.log('2', greet_1.saySome('我是saysome'));
function innerText(divName, name) {
    var PE = document.getElementById(divName);
    PE && (PE.innerText = greet_1.say(name));
}
innerText('greeting', '我是测试数据');
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxHQUFHLEdBQUcsVUFBUyxHQUFVO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLEdBQUssQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sWUFBVSxHQUFLLENBQUM7QUFDM0IsQ0FBQyxDQUFBO0FBTUcsa0JBQUc7QUFMUCxTQUFnQixPQUFPLENBQUMsR0FBVTtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixHQUFLLENBQUMsQ0FBQztJQUMxQyxPQUFPLFlBQVUsR0FBSyxDQUFDO0FBQzNCLENBQUM7QUFIRCwwQkFHQztBQUFBLENBQUM7Ozs7QUNQRixpQ0FBb0M7QUFLcEMsU0FBUyxVQUFVLENBQUMsRUFBVTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcsRUFBRSxDQUFDLElBQUksVUFBSyxFQUFFLENBQUMsR0FBSyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUNELFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsV0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsZUFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFFdEMsU0FBUyxTQUFTLENBQUMsT0FBYyxFQUFDLElBQVk7SUFDMUMsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFDRCxTQUFTLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIHNheSA9IGZ1bmN0aW9uKHN0cjpzdHJpbmcpOnN0cmluZ3tcclxuICAgIGNvbnNvbGUubG9nKGBpIGFtIGV4cG9ydCBzYXk6JHtzdHJ9YCk7XHJcbiAgICByZXR1cm4gYGV4cG9ydDoke3N0cn1gO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzYXlTb21lKHN0cjpzdHJpbmcpOnN0cmluZ3tcclxuICAgIGNvbnNvbGUubG9nKGBpIGFtIGV4cG9ydCBzYXlzb21lOiR7c3RyfWApO1xyXG4gICAgcmV0dXJuIGBleHBvcnQ6JHtzdHJ9YDtcclxufTtcclxuZXhwb3J0IHtcclxuICAgIHNheVxyXG59IiwiaW1wb3J0IHtzYXksc2F5U29tZX0gZnJvbSAnLi9ncmVldCc7XHJcbmludGVyZmFjZSBTdHVkZW50e1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYWdlOiBudW1iZXI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U3R1ZGVudChzdDpTdHVkZW50KTp2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGBzdHVkZW50OiR7c3QubmFtZX0tLSR7c3QuYWdlfWApO1xyXG59XHJcbmdldFN0dWRlbnQoe25hbWU6J+eykuWtkCcsYWdlOjEwMDB9KTtcclxuY29uc29sZS5sb2coJzEnLHNheSgn5oiR5pivc2F5JykpOyBcclxuY29uc29sZS5sb2coJzInLHNheVNvbWUoJ+aIkeaYr3NheXNvbWUnKSk7XHJcblxyXG5mdW5jdGlvbiBpbm5lclRleHQoZGl2TmFtZTpzdHJpbmcsbmFtZTogc3RyaW5nKXtcclxuICAgIGNvbnN0IFBFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XHJcbiAgICBQRSAmJiAoUEUuaW5uZXJUZXh0ID0gc2F5KG5hbWUpKTtcclxufVxyXG5pbm5lclRleHQoJ2dyZWV0aW5nJywn5oiR5piv5rWL6K+V5pWw5o2uJyk7Il19
