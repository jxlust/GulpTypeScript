class A {
    constructor() {
        this.x = 1;
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2;
        super.x = 3;
        console.log(super.x); // undefined
        console.log(this.x); // 3
    }
}

let b = new B();

//   由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
// 而当读取super.x的时候，读的是A.prototype.x，所以返回undefined。