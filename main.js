$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $('.bg-black').addClass('fixed');
    } else {
      $('.bg-black').removeClass('fixed');
    }
  });
});

$(function() {
  let pageTop = $('.page-top');
  pageTop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function() {
    $('body, html').animation({
      scrollTop: 0
    }, 500);
    return false;
  });
});
