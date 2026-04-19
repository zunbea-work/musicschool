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
});