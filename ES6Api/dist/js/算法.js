"use strict";function getTwoNumSum(r,e){var t={},a=[];for(var u in r){var n=e-r[u];t[n]&&a.push({firstIndex:u,value1:r[u],nextIndex:t[n],value2:n}),t[r[u]]=u}return a}var arr=[1,8,2,43,8,2,9,4,3,5,4,5],target=10;console.log("结果",getTwoNumSum(arr,target));
//# sourceMappingURL=算法.js.map
