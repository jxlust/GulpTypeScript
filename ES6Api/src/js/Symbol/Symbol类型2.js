// 常量使用 Symbol 值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的switch语句会按设计的方式工作。
const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}
console.log('1',getComplement(COLOR_GREEN) == COLOR_RED);

let triangle = Symbol();
const shapeType = {
  [triangle]: 111,
  [triangle]: 222,
  triangle: 333,
  myTest: Symbol()
};
shapeType[triangle] //222
shapeType["triangle"] //333

const Color_Type = {
  Red: Symbol(),
  Blue: Symbol(),
  Green: Symbol()
}
function getColor(color) {
  switch(color){
    case Color_Type.Red:
      return 1;
      //break;
    default:
      throw new Error('not defined color')
  }
}
//getColor(Color_Type.Red)


// Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

let obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(obj)
//  ["enum", "nonEnum", Symbol(my_key)]