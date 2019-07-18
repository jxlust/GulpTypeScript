function greeter(person:string) {
    return "Hello, " + person;
}

let user2 = "Jane User";
document.body.innerHTML = greeter(user2);
var obj = {name: 'q',age:2};
for (let value in obj) {
	if (typeof obj[value] === 'object') {
		//constantize(obj[value]);
	}
}
'sss '.trim();