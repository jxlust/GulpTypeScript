'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
exports.default = get;
var name = exports.name = 'zhu tou';
function add(x, y) {
    return x + y;
}
// 等价于==>
// export{
//     name as n,
//     add
// }
function get() {
    return '12345';
}
//# sourceMappingURL=moduleTest.js.map
