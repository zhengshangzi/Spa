$(function() {
  var $progress = $('progress');
  var timer     = 0;            
  var i         = 0;               
  $('#start-button').click(function() {
    if(timer !== 0) return;
    timer = window.setInterval(function() {
      $progress.attr('value', i++);
    }, 100);
  });
  $('#stop-button').click(function() {
    window.clearInterval(timer);
    timer = 0;
  });
  $('#reset-button').click(function() {
    $progress.attr('value', i = 0);
  });
});

