"use strict";

$(function() {
  // ハンバーガーメニュー
  $('#js-hamburger').on('click', function() {
    $(this).toggleClass("is-active");
    $('.c-nav').toggleClass("is-active");
  });

  // Topへ戻る
  var goTop = $('.js-page-top');

  goTop.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      goTop.fadeIn(300);
    } else {
      goTop.fadeOut(300);
    }
  });

  goTop.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });

  // 問い合わせ
  var toCta = $('.js-cta');

  toCta.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      toCta.fadeIn(300);
    } else {
      toCta.fadeOut(300);
    }
  });

  // スライダー
  $('.slider').slick({
    arrows:true,
    prevArrow: '<button class="arrow prev"></button>',
    nextArrow: '<button class="arrow next"></button>',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // アコーディオンメニュー
  $('.p-question__q').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});