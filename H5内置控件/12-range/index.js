$(function() {
    var $range = $('#range');
    var $age   = $('#age');
    $age.html($range.val());
    $range.change(function() {
      $age.html($range.val());
    });
  });
  
  