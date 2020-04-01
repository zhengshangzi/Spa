$(function() {
    var $img = $('img'),
        $url = $('input[type="url"]'),
        $btn = $('input[type="button"]'),
        $tmpImage;
  
    init();
    loadImage();
    //load url image tmpImg
    function init() {
      $tmpImage = $('<img>');
      $tmpImage.attr('crossOrigin', 'anonymous');
    }
  
    function loadImage() {
      var str = localStorage.getItem('img');
      if(str) {
        $img.attr('src', str);
      } else {
        $img.css({display: 'none'});
      }
    }
    //load local storge string to $img 
    $btn.click(function() {
      var url=$url.val();
      if(url==''){
        return;
      }
        $tmpImage.attr('src', $url.val());
        $url.val('');
    });
  
    $tmpImage.load(function() {
      //create canvas
      var can = $('<canvas>').get(0);
      var ctx = can.getContext('2d');
  
      can.width = this.width;
      can.height = this.height;
      //canvas fill tmpImg
      ctx.drawImage(this, 0, 0, can.width, can.height);
      //canvas output base64 string
      var str = can.toDataURL();
      //save base64 string to local storage
      localStorage.setItem('img', str);
      //load local storage string to $img
      loadImage();
    });
  });
  