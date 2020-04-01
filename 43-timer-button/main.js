requirejs.config({
    'paths': {
      'jquery': 'https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
    }
  });

require(['jquery'],function($){
    $(function(){
        var $btnAdd = $('#add');
        $btnAdd.click(function(){
            require(['timer-button1'],function(TimerButton){
            //全局对象调用show方法
                var tb=new TimerButton();
                tb.show({
                    num:5,
                    // num: Number($('#number').val()),
                    title: "同意",
                    onClick:function() {
                        alert("点击了定时器按钮");
                    }
                });
            });
        });
    });
});