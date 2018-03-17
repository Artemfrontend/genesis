$(document).ready(function () {
  $("a.go").click(function (e) {
    e.preventDefault();
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 1000);
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

$(function () {
  $('#push').click(function () {
    $('.hover-menu').toggleClass('line1');
    $('#push').toggleClass('line2');
  });
});

$(function () {
  $('#push2').click(function () {
    $('#menu1').toggleClass('line11');
    $('#menu2').toggleClass('line22');
    $('#menu3').toggleClass('line33');
    $('#anim').toggleClass('anim1');
  });
});

$(function () {
  var el;
  $("#rng").change(function () {
    el = $(this);
    el
      .next("#ong")
      .text(el.val());
  })
    .trigger('change');
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});