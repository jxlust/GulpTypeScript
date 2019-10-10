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

class A {
    constructor() {
        //都是实例属性
        this.a = 1;
    }
    //原型对象挂载的属性方法
    toSay(){
        console.log(1111111);
    }
}
A.prototype.a = 22;
// super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
class B extends A {
    constructor() {
        super();
        console.log('aaa:', super.a);//undefined
        
        super.toSay();
    }
}
let a = new B();
console.log(111,a instanceof A);