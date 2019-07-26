function getTwoNumSum(arr, target) {
    let obj = {};
    let newLists = [];
    for (let i in arr) {
        let need = target - arr[i];
        if (obj[need]) {
            //如果存在
            newLists.push({
                firstIndex: i,
                value1: arr[i],
                nextIndex: obj[need],
                value2: need
            });
        }
        obj[arr[i]] = i;
    }
    return newLists;
}
//例子
let arr = [1, 8, 2, 43, 8, 2, 9, 4, 3, 5, 4, 5];
let target = 10;
console.log('结果', getTwoNumSum(arr, target));

/**
 * 递归
 * arr[0] = 1;
 * arr[i+1] = arr[i]+arr[i-1];
 */
function triangle(index) {
    let value;
    if (index == 0 || index == 1) {
        value = 1;
    } else {
        value = triangle(index - 1) + triangle(index - 2);
    }
    return value;
}
//test
for (let i = 0; i < 10; i++) {
    console.log('结果', triangle(i));
}
/**
 * 二分排序插入排序的一种
 */
function diverSort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    let midIndex = Math.floor(arr.length / 2);
    let midValue = arr[midIndex];
    let leftArr = [];
    let rightArr = [];
    let midArr = [];
    console.log('m',midValue);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < midValue){
            //小于中间值的放左边
            leftArr.push(arr[i]);
        }else if(arr[i] > midValue){
            //大于中间值的放右边
            rightArr.push(arr[i]);
        }else{
            //等于
            midArr.push(midValue);
        }
    }
    return (diverSort(leftArr)).concat(midArr,diverSort(rightArr));
}
//test
let diverArr = [23,22,90,22,123,45,99,43,44,34,33,54,43];
console.log('diverArr',diverSort(diverArr));