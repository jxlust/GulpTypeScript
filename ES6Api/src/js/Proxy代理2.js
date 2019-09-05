var handler = {
    // get: function (target, key, receiver) {

    // },
    set: function (target, key, value, receiver) {
        console.log('re', receiver);
        target[key] = receiver;
    }
}
var pro = new Proxy({}, handler);
var myObj = {};
Object.setPrototypeOf(myObj,pro);
pro.name = 1;
myObj.name = 1;
console.log(myObj.name === pro);
console.log(myObj.name === myObj);
//console.log(pro.name === pro); //true

// let validator = {
//     set: function(obj, prop, value) {
//       if (prop === 'age') {
//         if (!Number.isInteger(value)) {
//           throw new TypeError('The age is not an integer');
//         }
//         if (value > 200) {
//           throw new RangeError('The age seems invalid');
//         }
//       }
//       // 对于满足条件的 age 属性以及其他属性，直接保存
//       obj[prop] = value;
//     }
//   };
  
//   let person = new Proxy({}, validator);
  
//   person.age = 100;
  
//   person.age // 100
//   person.age = 'young' // 报错
//   person.age = 300 // 报错

