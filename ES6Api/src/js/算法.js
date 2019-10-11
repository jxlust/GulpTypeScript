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
 * 尾递归优化 复杂度O(n)，上面的方法复杂度2的n次方
 * @param {*} arr 
 */
function triangle2(num, results, lastResults) {
    if (num <= 1) {
        return results;
    } else {
        num--;
        let newValue = results + lastResults;
        return triangle2(num, newValue, results);
    }
}
triangle2(3,1,1);
/**
 * 二分排序插入排序的一种
 */
function diverSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let midIndex = Math.floor(arr.length / 2);
    let midValue = arr[midIndex];
    let leftArr = [];
    let rightArr = [];
    let midArr = [];
    console.log('m', midValue);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midValue) {
            //小于中间值的放左边
            leftArr.push(arr[i]);
        } else if (arr[i] > midValue) {
            //大于中间值的放右边
            rightArr.push(arr[i]);
        } else {
            //等于
            midArr.push(midValue);
        }
    }
    return (diverSort(leftArr)).concat(midArr, diverSort(rightArr));
}
//test
let diverArr = [23, 22, 90, 22, 123, 45, 99, 43, 44, 34, 33, 54, 43];
console.log('diverArr', diverSort(diverArr));


//动态规划---通配符匹配
// 题目：
// 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符串（包括空字符串）。
// 两个字符串完全匹配才算匹配成功。

//例：s = 'zutlsp'; p = 'sp';
function isMacth(s,p){
    var pb = new Array(s.length + 1);
    for(var i = 0; i <= s.length + 1; i++){
        pb[i] = new Array(p.length + 1);
        for(var j = 0; j <= p.length + 1; j++){
            pb[i][j] = false;
        }
    }
    console.log('pb',JSON.stringify(pb));
    console.log('o',pb[0][0]);
    if(pb[0][0]){
        console.log('xxxxxx')
    }
    pb[0][0] = true;
        
    for(var i = 0 ; i < p.length ; i++){
        if(pb[0][i] && p.charAt(i) == '*'){
            pb[0][i+1] = true;
        }
    }
    //开始动态规划
    for(var i = 0; i < s.length ; i++){
        for(var j = 0; j < p.length; j++){
            if(p.charAt(j) == '*'){
                pb[i+1][j+1]  = pb[i][j+1] || pb[i+1][j]
            }else if(p.charAt(j) == '?' || s.charAt(i) == p.charAt(j)){
                pb[i+1][j+1] = pb[i][j]
            }
        }
    }
    return pb[s.length][p.length];
    
}
function createArray(s,p){
    var dp = new Array(s.length + 1);
    for(var i = 0 ; i < s.length + 1; i++){
        dp[i] = new Array(p.length + 1);
    }
    dp[0][0] = false;
    if(dp[0][0]){
        console.log('tttt');
    }
    return dp;
    
}