//函数不同参数调用
function myCallback(a, b, c) {

}

let obj = {
  love: 'love you',
  map: function (cb, obj) {
    cb.apply(obj, [this.love, 2, 3]);
  }
}
let MyObj = function (str) {
  this.str = str;
}
MyObj.prototype.map = function (cb, obj) {
  console.log(this.str);
  let arr = [];
  for (let i in this.str) {
    let r = cb.apply(obj, [this.str[i], i, this.str]);
    arr.push(r);
  }
  this.str = arr.join('');
}
let myObj = new MyObj('i love you');
console.log('str', myObj.str);
myObj.map(function (v, i, str) {
  console.log('遍历结果', v + '---' + i + '----' + str);
  return 0 + v;
});
console.log('map str', myObj.str);
obj.map(function (index, i2) {
  console.log(index);
  console.log(i2);
  console.log(this.a);
}, {
  a: 1111
});