$(document).ready(function(){
    $('.wrapper').fadeIn(2000);
    $('.loader').fadeOut(2500);
});

$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".space").offset().top},
        'slow');
});
