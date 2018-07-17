$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        appendArrows: $(".navigation"),
    });

    $('.flipper').click(function() {
        $('.play').toggleClass('active');
        $('.stop').toggleClass('unactive');
    })
});