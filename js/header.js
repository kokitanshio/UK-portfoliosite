$(function () {

  var $headerTop = $('#header').offset().top; //headerのウインドウ高さ
  var $headerHeight = $('#header').outerHeight(); //headerそのものの高さ
  var $windowWidth = $(window).width(); //画面幅取得

  console.log($headerTop);
  console.log($headerHeight);
  console.log($windowWidth);


  $(window).on('scroll', function () { //ウインドウスクロールがheaderまでのウインドウ高さを超えたらheader固定
    if ($(this).scrollTop() > $headerTop) {
      $('#header').addClass('header_fixed');
      $('#work').css('padding-top', $headerHeight);

      if ($windowWidth < 767) { //スクロールがheader固定高さを超えた時、画面幅が767px以下ならトグルボタンを表示
        $('#toggle').fadeIn();
      }
      
    } else { //ウインドウスクロールがheaderまでのウインドウ高さ+headerの高さを超えないとheader固定しない
      $('#header').removeClass('header_fixed');
      $('#work').css('padding-top', 0);

      if ($windowWidth < 767) { //スクロールがheader固定高さを超えない時、画面幅が767px以下ならトグルボタンを非表示
        $('#toggle').fadeOut();
      }

    }
  });

  //SPのヘッダーに関する関数
  function spHeader() {

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

  //トグルボタンクリックで変形・モーダル登場
  $('#toggle').on('click', spHeader);

  //モーダルのリンククリックでモーダル閉じる・トグル戻す
  $('.header-sp-list li a').on('click', spHeader);

  //トグルボタンクリック後リンクフェードイン


})