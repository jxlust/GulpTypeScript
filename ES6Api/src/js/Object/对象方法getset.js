const obj = {
    _foo: 1,
    get foo() {
        console.log('get...',this._foo);
       return  this._foo;
    },
    set foo(x) {
        console.log('set',this._foo);
        this._foo = x;
    }
};
obj.foo = 111;
console.log(obj.foo);