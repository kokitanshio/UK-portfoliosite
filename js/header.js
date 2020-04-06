$(function () {

  var $headerTop = $('#header').offset().top; //headerのウインドウ高さ
  var $headerHeight = $('#header').outerHeight(); //headerそのものの高さ
  var $windowWidth = $(window).width(); //初期読み込み時の画面幅取得
  var $breakWidth = 767;
  var $strongColor = '#ff3333'; //color.scssの$strongColor
  var $headerColor = 'transparent' //通常のheaderカラー

  $(function () { //画面幅が変わったらロードし直す処理
    var $timer = false;
    $(window).resize(function () {
      if ($timer !== false) { //resize関数実行時、時間経過がわかったらその度時間をクリアする
        clearTimeout($timer);
      }
      $timer = setTimeout(function () { 
        var $nowWidth = $(window).width(); //setTimeout関数実行時の画面幅を取得
        if ($windowWidth < $breakWidth && $nowWidth > $breakWidth) { //初期読み込み時の画面幅と新たな画面幅がbreakpointを跨ぐ場合
          location.reload(); //再読み込み
        } else if ($windowWidth > $breakWidth && $nowWidth < $breakWidth) { //初期読み込み時の画面幅と新たな画面幅がbreakpointを跨ぐ場合
          location.reload(); //再読み込み
        }
        $windowWidth = $nowWidth;
      }, 500); //5秒ごとにsetTimeout関数を実行
    })
  });

//header固定に関する処理
  $(window).on('scroll', function () { 
    if ($(this).scrollTop() > $headerTop) { //ウインドウスクロールがheaderまでのウインドウ高さを超えたらheader固定
      $('#header').addClass('header_fixed');
      $('#work').css('padding-top', $headerHeight);

      if ($windowWidth < $breakWidth) { //スクロールがheader固定高さを超えた時、ブレークポイント以下ならトグルボタンを表示
        $('#toggle').fadeIn();
      }
      
    } else { //ウインドウスクロールがheaderまでのウインドウ高さ+headerの高さを超えないとheader固定しない
      $('#header').removeClass('header_fixed');
      $('#work').css('padding-top', 0);

      if ($windowWidth < $breakWidth) { //スクロールがheader固定高さを超えない時、ブレークポイント以下ならトグルボタンを非表示
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


  //スクロールで対象のナビリンクに色つけ

  var $workHeight = $('#work').offset().top - 81; //workのウインドウ高さ
  var $serviceHeight = $('#service').offset().top - 81; //serviceのウインドウ高さ
  var $aboutHeight = $('#about').offset().top - 81; //aboutのウインドウ高さ
  var $contactHeight = $('#contact').offset().top - 81; //contactのウインドウ高さ

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
  });


})