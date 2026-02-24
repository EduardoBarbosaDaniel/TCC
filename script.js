$(document).ready(function () {

    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn .mobile-menu').toggleClass('active');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {

        const header = $('header');
        const scrollPosition = $(window).scrollTop();
        let activeSecctionIndex = 0;

        if (scrollPosition > 0) {
            header.css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.1)');
        } else {
            header.css('box-shadow', 'none');
        }

        sections.each(function(i){
            const sectionTop = $(this).offset().top - 120;

            if(scrollPosition >= sectionTop){
                activeSecctionIndex = i;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSecctionIndex]).addClass('active');

    });

});