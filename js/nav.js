var elementotop = $('.nav').offset().top;

$(window).scroll(function () {
    if( $(window).scrollTop() >= elementotop){
        $('body').addClass('nav-fix');
    }else{
        $('body').removeClass('nav-fix');
    }
});

$('.btn-menu').on('click', function () {
    $('.nav').toggleClass('nav-toggle');
})
