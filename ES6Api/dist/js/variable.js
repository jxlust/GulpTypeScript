'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Test1(arr) {
	var arr = [];

	var _loop = function _loop(i) {
		arr[i] = function () {
			console.log('i:' + i);
		};
	};

	for (var i = 0; i < 10; i++) {
		_loop(i);
	}
	arr[6]();
	//let arr;报错
	{
		var _arr = void 0;
	}
}
Test1();

function Test2() {

	var foo = {};
	foo.name = '例子Aa';
	console.log('const....');
	document.getElementById('greeting').innerText = 'hhhhhh';
	//foo = [];
}
function add(a, b) {
	return a + b;
}
Test2();

function Test3() {
	'use strict';

	var foo = Object.freeze({
		name: {
			a: 2
		}
	});
	//严格模式出错
	//foo.name = {};
	//对象冻结类似浅拷贝，只冻结第一层
	foo.name.a = 100;

	//对于对象的彻底冻结
	var constantize = function constantize(obj) {
		Object.freeze(obj);
		//方法一
		// for (let value in obj) {
		// 	if (typeof obj[value] === 'object') {
		// 		constantize(obj[value]);
		// 	}
		// }
		//方法二
		Object.keys(obj).forEach(function (v, index) {
			if (_typeof(obj[v]) === 'object') {
				constantize(obj[v]);
			}
		});
	};
	//debugger;
	constantize(foo);
	//foo.name.a = 99;//报错
	// setTimeout(() => {
	// 	foo.name.a = 99;	
	// }, 100);

}

Test3();

//tips: 六种申明变量的方式 var function let const import class

// 方法一
function getGlobal2() {
	return typeof window !== 'undefined' ? window : (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && typeof require === 'function' && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' ? global : this;
}
// 方法二
var getGlobal = function getGlobal() {
	if (typeof self !== 'undefined') {
		return self;
	}
	if (typeof window !== 'undefined') {
		return window;
	}
	if (typeof global !== 'undefined') {
		return global;
	}
	throw new Error('unable to locate global object');
};

//导出模块
var name = "我是很厉害的啦啦";
// module.export = {
// 	name: name,
// 	getName: add
// }

var Student = function () {
	function Student(name, age) {
		_classCallCheck(this, Student);

		this.name = name;
		this.age = age;
	}

	_createClass(Student, [{
		key: 'getInfo',
		value: function getInfo() {
			return this.name + ' : ' + this.age;
		}
	}]);

	return Student;
}();
// export {
// 	add,
// 	name,
// 	Student
// }
//# sourceMappingURL=variable.js.map
