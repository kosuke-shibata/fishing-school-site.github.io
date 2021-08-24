$('.menu-button').on('click', function() {
  if ($('.bg-black').hasClass('menu-open')) {
    $('.bg-black').removeClass('menu-open');
  } else {
    $('.bg-black').addClass('menu-open');
  }
});
