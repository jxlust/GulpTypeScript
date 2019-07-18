import {say,saySome} from './greet';
import $ = require('jquery');
//import $ from 'jquery';
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
function sendAjax() {
    $.ajax({
        url:'https://user.3d66.com/login/index/userInfo',
        type:'GET',
        data: {},
        crossDomain: true,
        timeout: 10000,
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function (data) {
            console.log('success.',data);
        },
        error:function (e) {
            console.log('error.',e);
        },
        complete:function () {
            console.log('complete..');
        }
    
    });
}
$(document).ready(function () {
    console.log('jq ready完成');
});
$(window).on('load',function () {
    console.log('jq load完成');
});
document.addEventListener('DOMContentLoaded',function() {
    console.log('dom ready完成');
});
window.onload = function(){
    console.log('onload加载完成..');
    $('#greeting').on('click',sendAjax);
}

// $.ajax({
//     url:'http://user.dev.3d66.com/login/index/userInfo',
//     type:'GET',
//     data: {},
//     contentType: 'application/json',
//     dataType:'json',
//     success: function () {
        
//     },
//     error:function () {
        
//     },
//     complete:function () {
        
//     }

// });