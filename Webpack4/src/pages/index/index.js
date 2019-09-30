import './index.scss'
import '../../assets/css/common.css'

import 'babel-polyfill';
function* gen() {
    yield test(1);
    yield test(2);
}
function test(str) {
    console.log(`${str} ------ 999999`);
}
let g = gen();
while(!g.next().done);
// g.next();
// g.next();