//头部跑马灯效果
let timer = setInterval(() => {
    let p1Text = $("#p1").text();
    //console.log(1,p1Text);
    let stext = p1Text.substring(0, 1);
    let endText = p1Text.substring(1);
    $("#p1").text(`${endText}${stext}`);
}, 300);


$('.left-sorts-wrap ul > li').on('click', function () {
    console.log(1, $(this).children('.section-link'));
    $(this).children('.section-link').addClass('active').end().siblings('li').children('a').removeClass('active');

});
// let headHeight = $('#headerId').height();
let offsetTopArray = [];
let h2Height = $('.right-h2-wrap').height();
$('.right-h2-wrap').each(function (index) {
    offsetTopArray.push($(this).get(0).offsetTop);
});
$('.right-goods-wrap').on('scroll', function () {
    // console.log(2, $(rh2_1).offset().top);
    // console.log('p2', $(rh2_1).position().top);
    // console.log('p3', $(rh2_1).get(0).offsetTop);
    // console.log('wrap h', $(this).height());
    console.log(3, $(this).scrollTop());
    let scrollTop = $(this).scrollTop();
    let rh2Els = $('.right-h2-wrap');
    let leftLi = $('.left-sorts-wrap ul > li');
    for (let i in offsetTopArray) {
        console.log(offsetTopArray[i]);
        if (scrollTop >= offsetTopArray[i]) {
            rh2Els.eq(i).children('.right-h2').addClass('fixed-right-title').end().siblings('.right-h2-wrap').children('.right-h2').removeClass('fixed-right-title');
            leftLi.eq(i).children('a').addClass('active').end().siblings('li').children('a').removeClass('active');
        }
    }
    if (scrollTop < offsetTopArray[0]) {
        rh2Els.eq(0).children('.right-h2').removeClass('fixed-right-title');
        leftLi.eq(0).children('a').removeClass('active');
    }
});