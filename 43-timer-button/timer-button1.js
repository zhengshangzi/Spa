//构造函数
define(['jquery'],function($){
function TimerButton(){
    var $btn =$( '<input type="button" class="timer-button"  disabled/>'),
        cfg={
            container:'body',
            num:6,
            title:'同意',
            onClick:null
        },
        timer;
    this.show=function show(conf){
    //1.DOM绘制dom draw
    // if (timer) clearInterval(timer);
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
    $btn.click(cfg.onClick)
}
}
return TimerButton;
})
