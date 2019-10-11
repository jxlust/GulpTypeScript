$(function(){
    let runWrap = $('.run-wrap');
    let headerBox = $('.box-wrap');
    let pEl = $('#p1');
    
    let runId = setInterval(() => {
        let left = headerBox.offset().left - 2;
       // console.log(left);
        headerBox.offset({left: left});
        if( -headerBox.offset().left >= pEl.width()){
            headerBox.offset({left: 0});
        }
    }, 100);
    
});