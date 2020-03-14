class Student {
    firstName : string;
    lastName : string;
    newName: string;
    constructor(fiestName : string,  lastName : string,newName: string) {
        this.firstName = fiestName;
        this.lastName = lastName;
        this.newName = newName;
    }
    greeter() {
        return `Hello,您好${this.firstName}${this.lastName}`;
    }
}
var user = new Student("王","小明",''); 
var ele = document.body || document.documentElement;
ele.innerHTML = user.greeter();
//https://www.jianshu.com/p/4f219f20af75