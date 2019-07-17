import {say,saySome} from './greet';
interface Student{
    name: string;
    age: number;
}
function getStudent(st:Student):void {
    console.log(`student:${st.name}--${st.age}`);
}
getStudent({name:'粒子',age:1000});
console.log('1',say('我是say')); 
console.log('2',saySome('我是saysome'));

function innerText(divName:string,name: string){
    console.log('test...');
    const PE = document.getElementById(divName);
    PE && (PE.innerText = say(name));
}
innerText('greeting','我是测试数据');