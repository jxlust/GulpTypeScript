class IncreasingCounter {
  // _count = 0;
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}

class Shape {
  constructor() {
    console.log('target', new.target);
    if (new.target === Shape) {
      throw new Error('本类不能实例化');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    // ...
  }
}

try {
  var x = new Shape(); // 报错  
} catch (error) {

}

var y = new Rectangle(3, 4); // 正确

// class Student{
//   constructor(name){
//     // console.log('student target:',new.target);
//     this.name = name;
//   }
// }
// Student.prototype.constructor.call();
function Student(name) {
  console.log('student target:',new.target);
  this.name = name;

}

let s = new Student('mm');
console.log('s',s.name);
let s2 = Student.call(s,'zz');//执行方法 返回值的undefined
console.log('s2',s2.name);