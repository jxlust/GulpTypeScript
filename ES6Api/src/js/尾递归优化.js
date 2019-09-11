//尾递归优化
function Fibonacci(num, s1 = 1, s2 = 1) {
  if (num <= 2) {
    return s2;
  } else {
    num = num - 1;
    return Fibonacci(num, s2, s1 + s2);
  }
}
console.log(Fibonacci(10));
for (let i = 1; i < 100; i++) {
  // console.log(Fibonacci(i));
}

let arr1 = [2, 3, 4, 5];

function newArr(n, i, arr2 = []) {
  arr1.forEach((value, index) => {
    if (n === i) {
      return newArr(n - 1);
    } else if (n <= 0) {
      return arr2;
    } else {
      // arr2[index]
      return newArr(n - 1);
    }
  })
}

function test2(arr1, n, i, res = 1) {
  if (n == i) {
    console.log(1,n);
    return test2(arr1, n - 1,i, res);
  } else if (n < 0) {
    return res;
  } else {
    return test2(arr1, n - 1,i, arr1[n] * res)
  }
}
let arr2 = [];
arr1.forEach((v,index)=>{
  arr2[index] = test2(arr1,arr1.length-1,index,1);
})
console.log('arr1',arr1);
console.log('arr2',arr2);
// console.log('!', test2(arr1, arr1.length - 1, 2,1));
/**
 * 
 * @param {*} arr1 
 * @param {*} n 
 * @param {*} arr2 
 */
function newValue(arr1, i, n, res) {
  if (n === i) {
    return newValue()
  }
}
// newArray(arr1, arr1.length);