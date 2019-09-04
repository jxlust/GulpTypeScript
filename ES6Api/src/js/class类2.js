class Student{
    constructor(...arg){
        this.arg = arg;//数组
    }
    *[Symbol.iterator]() {
        for(let v of this.arg){
            yield v;
        }
    }

}
for(let v of  new Student('a','b')){
    console.log(11,v);
}