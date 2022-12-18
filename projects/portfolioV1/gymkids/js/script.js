$(document).ready(function(){

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },

  });
  
  /*  menu mobile */
  $('.menu-mobile').find('span').on('click', function() {
    $('header').toggleClass('active');
  });

  if ($(window).width() < 577) {
    $('.grid-menu div').on('click', function(){
      $('header').toggleClass();
    })
 }

});