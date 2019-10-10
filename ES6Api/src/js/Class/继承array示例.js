class MyArray extends Array {
    constructor() {
        super();
        this.history = [
            []
        ];
    }
    commit() {
        console.log('this', this);
        console.log('this', this.length);
        this.history.push(this.slice());
    }
    revert() {
        this.history.splice(0, this.length, ...this.history[this.history.length - 1]);
    }
}

let myArray = new MyArray();
myArray.push(1);
myArray.push(2);

myArray.commit();
console.log('c:', myArray.history);
myArray.push(3);
myArray.commit();
console.log('c:', myArray.history);
myArray.revert();
console.log('c:', myArray.history);