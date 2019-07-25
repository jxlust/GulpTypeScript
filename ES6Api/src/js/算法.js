function getTwoNumSum(arr,target) {
    let obj = {};
    let newLists = [];
    for(let i in arr){
      let need = target - arr[i];
      if(obj[need]){
        //如果存在
        newLists.push({
            firstIndex: i ,
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
let arr = [1,8,2,43,8,2,9,4,3,5,4,5];
let target = 10;
console.log('结果',getTwoNumSum(arr,target));