class C {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    say() {
        console.log(this.name);
    }
}

class D extends C {
    constructor(name, id, age) {
        super(name, id); // 这里必须先调用super方法
        this.age = age;
    }
}
let objD = new D('love you', 22, 7);
objD.say();