$(document).ready(function() {
  $('.fadeIn').delay(500).fadeIn(500);

  $(window).scroll(function() {

    $('.portfolio-content').each(function(i) {

      var bottom_of_object = $(this).offset().top /*+ $(this).outerHeight()*/;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {

        $(this).delay(250).animate({
          'opacity': '1'
        }, 500);

      }

    });

  });

});
