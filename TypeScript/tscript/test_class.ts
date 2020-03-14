class Student2 {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person2 {
    firstName: string;
    lastName: string;
}

function greeter3(person : Person2) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user4 = new Student2("Jane", "M.", "User");
document.body.innerHTML = greeter3(user4);