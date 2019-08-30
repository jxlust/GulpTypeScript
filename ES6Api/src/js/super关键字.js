const proto = {
    x: 'hello',
    foo() {
        console.log(this.x);
    },
};

const obj = {
    x: 'world',
    foo() {
        super.foo();
    }
}
Object.setPrototypeOf(obj, proto);
obj.foo();

let z = {
    a: 3,
    b: 4
};
let n = {
    ...z
};
n.a = 3333;
console.log(n);
console.log(z);