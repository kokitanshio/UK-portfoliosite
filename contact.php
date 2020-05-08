<?php
//セッション開始
session_start();

// セッションIDを更新して変更(セッションハイジャック対策)
session_regenerate_id(TRUE);

// エスケープ関数を定義
function h($s){
  return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

// CSRF対策
if(!isset($_SESSION['token'])){
  $_SESSION['token'] = sha1(uniqid(mt_rand(), TRUE));
}
// トークンを変数に代入
$token = $_SESSION['token'];

?>

<!DOCTYPE html>
<html lang="ja">
<head>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165394154-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-165394154-1');
  </script>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UK Portfolio site</title>
  <!--SEO対策-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="ページの内容を表す文章">
  <meta name="robots" content="noindex,nofollow">
  <meta name="format-detection" content="telephone=no">
  <!--SEO対策-->
  <!--Twitterカード-->
	<meta property="og:url" content="https://uk-portfolio.net/">
	<meta property="og:title" content="UK Portfolio site">
	<meta property="og:type" content="website">
	<meta property="og:description" content="上田康貴のポートフォリオサイトです">
  <meta property="og:image" content="https://uk-portfolio.net/img/portfolio/uk-portfolio-pre.png">
	<meta property="og:site_name" content="UK Portfolio site">
  <meta property="og:locale" content="ja_JP">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@tanshiokoki73">
  <!--Twitterカード-->
  <!--サイトアイコン-->
  <link rel="icon" href="img/favicon.png">
  <!--サイトアイコン-->
  <!--スマホ用アイコン-->
  <link rel="apple-touch-icon-precomposed" href="画像のURL">
  <!--スマホ用アイコン-->

  <!--fontawsom-->
  <link href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" rel="stylesheet">
  <!--wow-->
  <link rel="stylesheet" href="css/animate.css">
  <!--googlefont-->
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Kaushan+Script&display=swap" rel="stylesheet">
  <!--stylesheet-->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!--ヘッダーここから-->
  <header id="header">
    <!--PC用headerここから-->
    <div class="pc-header">
      <nav class="inner header">
        <div class="header-logo">
          <a href="#top"></a>
        </div>
        <!--PC用header-listここから-->
        <ul class="header-list">
          <li class="header-list-item"><a href="/">HOME</a></li>
          <li class="header-list-item"><a href="#">WORK</a></li>
          <li class="header-list-item"><a href="service.html">SERVICE</a></li>
          <li class="header-list-item"><a href="#">ABOUT</a></li>
          <li class="header-list-item"><a href="contact.php">CONTACT</a></li>
          <li class="header-list-item"><a href="https://twitter.com/tanshiokoki73" target="_blank" id="twitter"><i class="fab fa-twitter"></i></a></li>
        </ul>
        <!--PC用header-listここまで-->
      </nav>
      <!--PC用headerここまで-->
    </div>
    
    <!--SP用headerここから-->
    <div class="sp-header">
      <!--SP用headerはheaderとして残さず最初から右上にfixedしたトグルボタンを表示する形にした-->
      <!--トグルボタンはheader高さ以上でフェードインの予定-->
      <!--トグルボタン-->
      <div id="toggle" class="header-toggle">
        <span id="toggle_one" class="toggle_one_active"></span>
        <span id="toggle_two" class="toggle_two_active"></span>
        <span id="toggle_three" class="toggle_three_active"></span>
      </div>
      <!--トグルボタン-->
    
      <!--トグルクリックでモーダル-->
      <div class="header-sp">
        <nav>
          <!--SP用header-listここから-->
          <ul class="header-sp-list">
            <li class="header-sp-list-item"><a href="/"><i class="fas fa-home"></i>HOME</a></li>
            <li class="header-sp-list-item"><a href="#work"><i class="fas fa-briefcase"></i>WORK</a></li>
            <li class="header-sp-list-item"><a href="service.html"><i class="fas fa-tasks"></i>SERVICE</a></li>
            <li class="header-sp-list-item"><a href="#about"><i class="far fa-address-card"></i>ABOUT</a></li>
            <li class="header-sp-list-item"><a href="contact.php"><i class="far fa-envelope"></i>CONTACT</a></li>
            <li class="header-sp-list-item"><a href="https://twitter.com/tanshiokoki73" target="_blank" id="twitter_sp"><i class="fab fa-twitter"></i></a></li>
          </ul>
          <!--SP用header-listここまで-->
        
        </nav>
      </div>
      <!--トグルクリックでモーダル-->
    </div>
    <!--sp用headerここまで-->
  </header>
  <!--ヘッダーここまで-->

  <!--コンタクトここから-->
  <section class="contact">
    <!--タイトルバナーここから-->
    <div class="banner">
      <div class="inner">
        <h2  data-wow-offset="100" class="wow fadeIn banner-title banner-title-contact">CONTACT</h2>
        <div data-wow-delay="0.4s" class="wow slideInRight banner-text banner-text-contact">お問い合わせ</div>
      </div>
    </div>
    <!--タイトルバナーここまで-->

    <div class="inner">
      <p class="contact-text wow fadeIn">
        お仕事のご依頼・ご相談など<br>お気軽にお問い合わせください<br>原則１〜３営業日以内に返信いたします
      </p>

      <form class="form" action="confirmation.php" method="POST">
        <input class="form-box wow fadeInUp" type="text" name="name" id="name" placeholder="お名前・会社名" required>
        <input class="form-box wow fadeInUp" data-wow-delay="0.1s" type="text" name="mail" id="mail" placeholder="メールアドレス" required>
        <span><?php echo h($error); ?></span>
        <textarea class="form-box wow fadeInUp" data-wow-delay="0.2s" name="message" id="message" cols="30" rows="10" placeholder="お問い合わせ内容" required></textarea>
        <div class="btn wow fadeInUp">
          <div class="btn-cover">確認</div>
          <input class="btn-link" type="submit" value="確認">
          <input type="hidden" name="token" value="<?php echo h($token); ?>">
        </div>
      </form>

    </div>
  </section>
  <!--コンタクトここまで-->

  <!--フッターここから-->
  <footer>
    <div class="sns-container">
      <a href="https://twitter.com/tanshiokoki73" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
      <a href="https://github.com/kokitanshio" target="_blank"><i class="fab fa-github fa-2x"></i></a>
    </div>
      &copy; 2020. UK Portfolio.
  </footer>
  <!--フッターここまで-->
  <!--jQuery-->
  <script src="js/jquery-3.4.1.min.js"></script>
  <!--wow-->
  <script src="js/wow.min.js"></script>
  <script src="js/wow_start.js"></script>
  <!--ローディングとtop-logoのJS-->
  <script src="js/load.js"></script>
  <!--headerのJS-->
  <script src="js/header.js"></script>
  <!--twitterアイコンのJS-->
  <script src="js/twitter.js"></script>
  <!--スクロール系JS-->
  <script src="js/scroll.js"></script>

</body>
</html>