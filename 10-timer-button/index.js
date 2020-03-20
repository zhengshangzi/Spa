$(function() {
    var $btn = $('input[type="button"]');
    var i    = 9;
    var timer;
    $btn.val('同意 (' + i + ' s)');
    $btn.attr('disabled', 'disabled');
    timer = window.setInterval(function() {
      if(i === 0) {
        window.clearInterval(timer);
        $btn.val('同意');
        $btn.removeAttr('disabled');
      }
      else{
        $btn.val('同意 (' + i-- + ' s)');
      }
    }, 1000);  
    $btn.click(function() {
      alert('就知道你会同意的！');
    });
  });
  