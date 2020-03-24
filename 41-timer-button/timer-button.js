var $timerButton =(function(){
    var $btn =$( '<input type="button" class="timer-button"  disabled/>'),
        //简单..变量
        cfg={
            container:'body',
            num:6,
            title:'同意',
        },
        timer;
   
    function show(conf){
        //1.DOM绘制dom draw
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        $btn.val(cfg.title + '('+cfg.num+"s)");
        //2.enent bind
        timer = setInterval(function(){
            cfg.num--;
            if(cfg.num === 0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');//去掉禁用属性
            }else{
                $btn.val(cfg.title + '('+cfg.num+"s)");
            }
        },1000);
    }
    $btn.click(function(){
        cfg.onClick();
    });
    return{
        show:show
    }
   
}());
//不用page load event
/*封装成对象，有几种方案
1.全局对象,简单对象自变量，不完全面向对象，不包括私有方法
var timerBtn={
    show:function()
}
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn = (function(){
    return{
        show:function(){}
    }
}())匿名函数
3.构造函数
function TimerBtn(){

}
var tb=new TimerBtn()
*/