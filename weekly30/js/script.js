$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.nav-menu').slideToggle();
    });
    
    
    
    
    
});
    
    
$(document).on('click', 'a', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
    
    
    
    if ($(window).width() > 721) {
        $(document).on('scroll', function () {
            if ($(this).scrollTop() > 1) {
                $('.nav-menu').addClass('sticky');
                $('.clearfix').addClass('sticky-ul');
            }
            else {
                $('.nav-menu').removeClass('sticky');
                $('.clearfix').removeClass('sticky-ul');
            }
        });  
    }
    else if ($(window).width() < 720) {
        jQuery(document).ready(function () {
            jQuery('li').click(function () {
                jQuery('.nav-menu').slideToggle();
            });
        });   
    }