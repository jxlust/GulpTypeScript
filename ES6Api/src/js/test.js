$(function() {
    $('.ask').click(function() {
      //判断登录
      if (!objSite.isLogin()) {
        openLogin();
        return false;
      }
  
      layer.open({
        type: 2,
        skin: 'layer-nobg',
        title: false,
        resize: false,
        area: ['720px', '593px'],
        content: [objSite.getZixueUrl('question/ask_pop'), 'no']
      });
  
    });
  
    $('.course_ask').click(function() {
      //判断登录
      if (!objSite.isLogin()) {
        openLogin();
        return false;
      }
      var course_id = $('input[name="course_id"]').val();
      if (course_id == undefined) {
        course_id = 0;
      }
      layer.open({
        type: 2,
        skin: 'layer-nobg',
        title: false,
        resize: false,
        area: ['720px', '643px'],
        content: [objSite.getZixueUrl('question/ask_pop?cid='+course_id), 'no']
      });
  
    });
  
  });