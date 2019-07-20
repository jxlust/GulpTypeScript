function Test1(arr) {
	var arr = [];
	for (let i = 0; i < 10; i++) {
		arr[i] = function () {
			console.log('i:' + i);
		}
	}
	arr[6]();
	//let arr;报错
	{
		let arr;

	}
}
Test1();

function Test2() {

	const foo = {};
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
	const foo = Object.freeze({
		name: {
			a: 2
		}
	});
	//严格模式出错
	//foo.name = {};
	//对象冻结类似浅拷贝，只冻结第一层
	foo.name.a = 100;

	//对于对象的彻底冻结
	var constantize = (obj) => {
		Object.freeze(obj);
		//方法一
		// for (let value in obj) {
		// 	if (typeof obj[value] === 'object') {
		// 		constantize(obj[value]);
		// 	}
		// }
		//方法二
		Object.keys(obj).forEach(function (v, index) {
			if (typeof obj[v] === 'object') {
				constantize(obj[v]);
			}
		});
	}
	//debugger;
	constantize(foo);
	//foo.name.a = 99;//报错
	// setTimeout(() => {
	// 	foo.name.a = 99;	
	// }, 100);


}

function test4() {
	//对象的拷贝
	let obj1 = {
		a: {
			b: 1
		}
	};
	let obj2 = Object.assign({}, obj1);
	//浅拷贝
	let deepAssign = (obj) => {
		let arr = Array.isArray(obj) ? [] : {};
		Object.keys(obj).forEach((value) => {
			if (typeof obj[value] === 'object') {
				arr[value] = deepAssign(obj[value])
			} else {
				arr[value] = obj[value];
			}
		})
		return arr;
	}
	let obj3 = deepAssign(obj1); //深拷贝

}

Test3();

//tips: 六种申明变量的方式 var function let const import class

// 方法一
function getGlobal2() {
	return (typeof window !== 'undefined' ?
		window :
		(typeof process === 'object' &&
			typeof require === 'function' &&
			typeof global === 'object') ?
		global :
		this);
}
// 方法二
var getGlobal = function () {
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
let name = "我是很厉害的啦啦";
// module.export = {
// 	name: name,
// 	getName: add
// }
class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getInfo() {
		return `${this.name} : ${this.age}`;
	}
}
// export {
// 	add,
// 	name,
// 	Student
// }