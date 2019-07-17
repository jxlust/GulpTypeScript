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
	foo.name = '例子';
	foo = [];
}

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
		Object.keys(obj).forEach(function (v,index) {
			if(typeof obj[v] === 'object'){
				constantize(obj[v]);
			}
		});
	}
	//debugger;
	constantize(foo);
	foo.name.a = 99;
	// setTimeout(() => {
	// 	foo.name.a = 99;	
	// }, 100);
	

}

Test3();

//tips: 六种申明变量的方式 var function let const import class

// 方法一
function getGlobal2() {
return (typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);
}
// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};