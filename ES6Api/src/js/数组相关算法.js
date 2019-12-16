function remove() {
    let arr = [1, 1, 6, 2, 1, 2, 4, 5, 2];
    let arr2 = arr.filter((value, index) => {
        return (arr.indexOf(value) === index)
    })
    let arr3 = new Set(arr);
    console.log('set去重', arr3);
    console.log('去重', arr2);
}
remove();
function getAppearMax() {
    let arr = [1, 1, 6, 2, 1, 2, 4, 2, 5, 2];
    const map = new Map();
    arr.forEach((value, index) => {
        if (map.has(value)) {
            let v = map.get(value) + 1;
            map.set(value, v);
        } else {
            map.set(value, 1)
        }
    })
    console.log('map:', map);
    let Max = Math.max(...map.values());
    let MaxNums = [];
    for (let [k, v] of map) {
        if (v === Max) {
            MaxNums.push(k);
        }
        // console.log(k,v);
    }
    console.log('nums：', MaxNums);
}
getAppearMax();