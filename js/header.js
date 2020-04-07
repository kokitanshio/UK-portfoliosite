$(function () {

  $(window).on('load resize', function () { //縦幅、横幅変わるたびに変数をリサイズ

    //-------------リサイズ要な変数たち----------------
    var $headerTop = $('#header').offset().top; //headerのウインドウ高さ
    var $workHeight = $('#work').offset().top - 81; //workのウインドウ高さ
    var $serviceHeight = $('#service').offset().top - 81; //serviceのウインドウ高さ
    var $aboutHeight = $('#about').offset().top - 81; //aboutのウインドウ高さ
    var $contactHeight = $('#contact').offset().top - 81; //contactのウインドウ高さ
    //-------------リサイズ要な変数たち----------------


    //PC/SP共通
    //header固定に関する処理
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > $headerTop) { //ウインドウスクロールがheaderまでのウインドウ高さを超えたらheader固定
        $('.pc-header').addClass('header_fixed');
      } else { //ウインドウスクロールがheaderまでのウインドウ高さ+headerの高さを超えないとheader固定しない
        $('.pc-header').removeClass('header_fixed');
      }
    });
    
    //PCのヘッダー
    //スクロールで対象のナビリンクに色つけ

    $(window).on('scroll', function () {
      
      var $windowTop = $(this).scrollTop(); //現在のスクロール位置を取得
      
      if ($windowTop > $workHeight && $windowTop < $serviceHeight) { //workのセクションでworkに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(1)').addClass('scroll_color');
      } else if ($windowTop > $serviceHeight && $windowTop < $aboutHeight) { //serviceのセクションでserviceに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(2)').addClass('scroll_color');
      } else if ($windowTop > $aboutHeight && $windowTop < $contactHeight) { //aboutのセクションでaboutに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(3)').addClass('scroll_color');
      } else if ($windowTop > $contactHeight) { //contantのセクションでcontactに色つけ
        $('.header-list li').removeClass('scroll_color');
        $('.header-list li:nth-child(4)').addClass('scroll_color');
      } else { //上記以外は色なし
        $('.header-list li').removeClass('scroll_color');
      }
      
      //SPのヘッダー
      //トグル表示処理
      if ($windowTop > $headerTop) { //スクロール高さがheader高さ超えたらトグル表示
        $('#toggle').fadeIn();
        //console.log('表示');
      } else { //超えなきゃ非表示
        $('#toggle').fadeOut();
        //console.log('非表示');
      }
      
    });
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