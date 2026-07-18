"use strict";

$(function() {
  // ハンバーガーメニュー
  $('#js-hamburger').on('click', function() {
    $(this).toggleClass("is-active");
    $('.c-nav').toggleClass("is-active");
  });

  // Topへ戻る
  var floating = $('.js-floating');
  var footer = $('footer');

    // 表示数値設定
  var showPosition = 600;
  var bottomSpace = 0;
  var fadeSpeed = 300;

  floating.hide();

  $(window).on('scroll', function () {

    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const footerTop = footer.offset().top;
    const footerDistance = footerTop - (scrollTop + windowHeight);

    if (scrollTop > showPosition) {
      floating.fadeIn(fadeSpeed);
    } else {
      floating.fadeOut(fadeSpeed);
    }

    if (footerDistance < 0) {
      floating.css('transform', `translateY(${footerDistance + bottomSpace}px)`);
    } else {
      floating.css('transform', 'translateY(0)');
    }
  });

  var goTop = $('.js-page-top');

  goTop.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });

  // スライダー
  const swiper = new Swiper('.p-result__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // $('.slider').slick({
  //   arrows:true,
  //   prevArrow: '<button class="arrow prev"></button>',
  //   nextArrow: '<button class="arrow next"></button>',
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // });

  // アコーディオンメニュー
  $('.p-question__q').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});