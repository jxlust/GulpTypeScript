import get,{name,add} from './moduleTest';
import {name as asyncName} from './moduleAsync';
// import get, * as obj from './circle';
console.log('name:',name);
console.log('sum:',add(1,2));
console.log('get:',get());
setTimeout(() => {
    console.log('asyn name',asyncName);//bar
}, 2000);

