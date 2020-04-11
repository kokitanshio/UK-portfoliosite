$(function () {

  var $headerTop = $('#header').offset().top; //headerのウインドウ高さ 全て

  var url = location.href;
  console.log(url);
  if (url == "https://kokitanshio.com/" || url == "http://kokitanshio.com/") { //topページのみ

    $(window).on('scroll', function () { //topページのみ
    
      //-------------topページでのみ必要な変数たち----------------
      var $workHeight = $('#work').offset().top - 81; //workのウインドウ高さ topのみ
      var $serviceHeight = $('#service').offset().top - 81; //serviceのウインドウ高さ topのみ
      var $aboutHeight = $('#about').offset().top - 81; //aboutのウインドウ高さ topのみ
      var $contactHeight = $('#contact').offset().top - 81; //contactのウインドウ高さ topのみ
      //-------------topページでのみ必要な変数たち----------------
        
      var $windowTop = $(this).scrollTop(); //現在のスクロール位置を取得
  
      //スクロールで対象のナビリンクに色つけ
      if ($windowTop > $workHeight && $windowTop <= $serviceHeight) { //workのセクションでworkに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(2)').addClass('scroll_color');
      } else if ($windowTop > $serviceHeight && $windowTop <= $aboutHeight) { //serviceのセクションでserviceに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(3)').addClass('scroll_color');
      } else if ($windowTop > $aboutHeight && $windowTop <= $contactHeight) { //aboutのセクションでaboutに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(4)').addClass('scroll_color');
      } else if ($windowTop > $contactHeight) { //contantのセクションでcontactに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(5)').addClass('scroll_color');
      } else { //上記以外は色なし
        $('.header-list li').removeClass('scroll_color');
      }
    });
  } //topページのみ必要な処理終了

    $(window).on('scroll resize', function () {
        
      var $windowTop = $(this).scrollTop(); //現在のスクロール位置を取得

      console.log($headerTop);
  
      //header固定に関する処理、トグルの非表示処理
      if ($windowTop > $headerTop) { //ウインドウスクロールがheaderまでのウインドウ高さを超えたら
        $('.pc-header').addClass('header_fixed'); //header固定
        $('#toggle').fadeIn(); //トグルフェードイン
        //console.log('表示');
      } else { //ウインドウスクロールがheaderまでのウインドウ高さ+headerの高さを超えない
        $('.pc-header').removeClass('header_fixed'); //header固定しない
        $('#toggle').fadeOut(); //トグルフェードアウト
        //console.log('非表示');
      }
    });
  
  
  function spHeader() { //トグルの変形処理及びSPリンクのスライドインを関数化

    //トグルボタンの変形処理
    $('#toggle_one').toggleClass('toggle_one');
    $('#toggle_two').toggleClass('toggle_two');
    $('#toggle_three').toggleClass('toggle_three');

    if ($('#toggle_one').hasClass('toggle_one')) { //トグルが変形後にモーダル表示
      $('.header-sp').fadeIn();
      $('body').css('overflow', 'hidden');
    } else { //非表示
      $('.header-sp').fadeOut();
      $('body').css('overflow', 'initial');
    }
    //リンクがスライドイン
    $('.header-sp-list li').slideToggle();
  }

  //トグルボタンクリックでモーダル登場
  $('#toggle').on('click', spHeader);

  //モーダルのリンククリックでモーダル閉じる・トグル戻す
  $('.header-sp-list li a').on('click', spHeader);

})