$(document).ready(function(){
    $('.wrapper').fadeIn(4000);
    $('.loader').fadeOut(4000);
});

$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".space").offset().top},
        'slow');
});
