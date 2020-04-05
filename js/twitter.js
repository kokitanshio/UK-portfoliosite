$(function () {
  $('#twitter').hover( //pcのtwitterリンクホバー時に牛のアイコンに差し替え
    function () {
      $(this).html('<img src="img/caw.png" alt="牛のアイコン">');
    },
    function () {
      $(this).html('<i class="fab fa-twitter"></i>');
    }
  );

  $('#twitter_sp').hover( //spのtwitterリンクホバー時に牛のアイコンに差し替え
    function () {
      $(this).html('<img src="img/caw2.png" alt="牛のアイコン">');
    },
    function () {
      $(this).html('<i class="fab fa-twitter"></i>');
    }
  );
})