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
function add(a,b) {
	return a + b;
}
Test2();
let name = "我是很厉害的啦啦";
// module.export = {
// 	name: name,
// 	getName: add
// }
class Student {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	getInfo(){
		return `${this.name} : ${this.age}`;
	}
}
export {
	add,
	name,
	Student
}