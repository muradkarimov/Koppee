$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.fixed').fadeIn('slow');
    } else {
        $('.fixed').fadeOut('slow');
    }
});
$('.fixed').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});