export var name = 'zhu tou';
export function add(x, y) {
    return x + y;
}
// 等价于==>
// export{
//     name as n,
//     add
// }
export default function get() {
    return '12345';
}