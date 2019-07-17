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
    console.log('const....');
    document.getElementById('greeting').innerText = 'hhhhhh';
	//foo = [];
}
Test2();