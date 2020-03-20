$(function() {
  var $width = $('#rectangle-width');
  var $height = $('#rectangle-height');
  var $calc = $('#rectangle-calc');

  $calc.click(function() {
    //if error return
    if(!validate('#rectangle-width') || !validate('#rectangle-height')) return;
     //get value  //calculate
    var width  = Number($width.val()),
        height = Number($height.val()),
        p      = roundFractional(width * 2 + height * 2, 2),
        a      = roundFractional(width * height, 2);
    //output
    $('#rectangle-perimeter').val(p);
    $('#rectangle-area').val(a);
  });
  //event keypress
  //event argument get key value
  //ilegal key filter       e.preventDefault();
  //合法字符还要考虑出现的位置
  $width.keypress(function (e) { 
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
      e.preventDefault();
      return;
    }
    if(e.key === 'e') {
      if(pos === 0 || content.indexOf('e') !== -1 
          || content.indexOf('E') !== -1) {
        e.preventDefault();
        return;
      }

      if(pos === 1 && content.substring(0,1) === '-') {
        e.preventDefault();
        return;
      }
    }
  });
  //合法字符e
  //允许出现在非科学计数法的数字末尾
  //允许出现在非科学计数法的数字中间

  //不允许出现在非科学计数法的数字前面
  //不允许出现在空文本中
  //不允许出现在负号后面
  //不允许出现在科学计数法数字的末尾
  //不允许出现在科学计数法数字的前面
  //不允许出现在科学计数法数字的中间

  $height.keypress(function (e) { 
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
      e.preventDefault();
      return;
    }

  });
  //字段级校验--按tab下不来
  // $width.focusout(function() {
  //   if(validate('#rectangle-width'))
  //   $width.select();
  // });
  
  // $height.focusout(function() {
  //   if( validate('#rectangle-height'))
  //   $height.select();
  // });
  /**
   * 小数点后面保留第 n 位
   * 
   * @param x 做近似处理的数
   * @param n 小数点后第 n 位
   * @returns 近似处理后的数 
   */
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }

  /**
   * 对字段进行数据合法性校验
   *
   * @param field 字段的 id
   * @returns boolean 验证通过为 true，验证不通过为 false
   */
  function validate(field) {
    //get dom error message
    var $data    = $(field),
        $message = $(field + '-validate'),
        label    = $(field).attr('data-label');
    //null
    if($data.val() === '') {
      $message.html(label + '不能为空！');
      //设置焦点
      $data.select();
      return false;
    }
    //number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
      $message.html(label + '必须是数值');
      $data.select();
      return false;
    }
    //>0 范围
    if(window.Number($data.val()) < 0) {
      //prompt error message
      //return false
      $message.html(label + '必须大于零');
      $data.select();
      return false;
    }
    $message.html('');
    return true;
  }
});
