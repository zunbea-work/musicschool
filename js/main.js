"use strict";

$(function() {
  $('#js-hamburger').on('click', function() {
    $(this).toggleClass("is-active");
    $('.c-nav').toggleClass("is-active");
  });
});