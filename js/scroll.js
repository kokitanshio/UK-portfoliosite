$(function () {
  var speed = 600;
    // スムーススクロール
    $('a[href^="#"]').click(function(){
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-80;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  
  var $headerTop = $('#header').offset().top
    //to-top途中から出現
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > $headerTop) { //スクロール高さがヘッダー高さを超えたら表示
        $('#to-top').fadeIn();
      } else { 超えなかったら非表示
        $('#to-top').fadeOut();
      }
    });
  
    //to-top押すと上に
    $('#to-top').click(function () {
      $('html,body').animate({
        'scrollTop': 0
      }, speed);
    });
})