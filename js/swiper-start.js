
var mySwiper2 = new Swiper('.swiper2', {
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisiblity: true,
  watchSlidesProgress: true,
  autoplay: {delay: 5000},
  direction: 'horizontal',
  breakpoints: {
    1024: {
      direction: 'vertical',
    },
  }
});

// swiperを生成
var mySwiper1 = new Swiper('.swiper1', {
  speed: 1000,
  loop: true,
  effect: 'fade',
  autoplay: {delay: 5000},
  thumbs: {
    swiper:mySwiper2
  },
});

// slideToメソッドを実行する関数を定義
// function slideThumb(index) {
// 	swiperMain.slideTo(index);
// }
