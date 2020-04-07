$(function () {
  $('body').css({ 'overflow': 'hidden' }); //bodyをスクロール不可にしておく
  $('#logoSb').addClass('logo_back'); //subtitleを下にずらし消しておく
  $('#logoText').addClass('logo_back'); //textを下にずらし消しておく
  $('#logoCircle').css({ //logo-circleを下にずらしておく
    'opacity': '0',
    'top': '80%',
  });
  $('.top-text').css({ 'display': 'none' }); //top-textを消しておく

  $(window).on('load', function () { //画面読み込み時に実行
    
    setTimeout(loading, 1500); //画面読み込み後1.5s後にローディング処理実行
    
    setTimeout(logo, 1600); //画面読み込み後1.6s後にロゴ処理実行
    
    setTimeout(stopload, 10000); //10秒経ったらロード画面非表示に


    function loading() { //ローディング処理の関数
      $('#load_back').animate({ //グレー背景を白にする
        'opacity': '0',
      });
      $('#load').delay(200).fadeOut(2000); //load画面をフェードアウト
      $('body').css({ 'overflow': 'initial' }); //bodyをスクロール可能に
    } //ローディング処理の関数終了

    function logo() { //top-logoの関数
      $('#logoSb').removeClass('logo_back');
      $('#logoText').removeClass('logo_back');
      $('#logoCircle').delay(1000).animate({ //1s遅れでlogo-circleを上にフェードイン
        'opacity': '1',
        'top': '50%',
      }, 4000);
      $('.top-text').delay(2000).fadeIn(2000);//2s遅れでtop-textをフェードイン
    } //top-logoの関数終了

    function stopload() { //ロード画面終了の関数
      $('#load').css({ 'display': 'none' });
      $('body').css({ 'overflow': 'initial' });
    }
    
  });
})