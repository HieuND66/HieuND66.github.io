"use strict";

$(document).ready(function () {
  $('.slide_banner').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.show_menu').click(function () {
    $('.menu_respontive_ovelay').css({
      'right': 0
    });
    $('.menu_respontive').css({
      'left': 0
    });
  });
  $('.menu_respontive_ovelay').click(function () {
    $(this).css({
      'right': 'unset'
    });
    $('.menu_respontive').css({
      'left': '-100%'
    });
  });
});
$(document).on('click', '.footer-image-buttom', function () {
  $('html,body').animate({
    scrollTop: 0
  }, 'fast');
});
$(window).scroll(function () {
  var numberScroll = $(this).scrollTop();

  if (numberScroll > 100) {
    $('.main_header').css({
      'background-color': 'black'
    });
    $('.main_menu-item-link').css({
      'color': 'white'
    });
    $('.main_menu-item-active .main_menu-item-link').css({
      'color': '#FF4A17'
    });
  } else {
    $('.main_header').css({
      'background-color': 'white'
    }); // $('.main_menu-item-active .main_menu-item-link').css({
    //   'color': '#FF4A17'
    // })

    $('.main_menu-item-link').css({
      'color': 'black'
    });
  }
});
$(window).scroll(function () {
  var numberScroll = $(this).scrollTop();
  console.log(numberScroll + 'scroll');
});
$(document).on('click', '.scroll1', function () {
  $('html,body').animate({
    scrollTop: 689
  }, 'fast');
});
$(document).on('click', '.scroll2', function () {
  $('html,body').animate({
    scrollTop: 1483
  }, 'fast');
});
$(document).on('click', '.scroll3', function () {
  $('html,body').animate({
    scrollTop: 2455
  }, 'fast');
});
$(document).on('click', '.scroll4', function () {
  $('html,body').animate({
    scrollTop: 3133
  }, 'fast');
});
$(document).on('click', '.scroll5', function () {
  $('html,body').animate({
    scrollTop: 5883
  }, 'fast');
});
$(document).on('click', '.scroll6', function () {
  $('html,body').animate({
    scrollTop: 7778
  }, 'fast');
});