$(document).ready(function () {

    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn .mobile-menu').toggleClass('active');
    });

    const sections = $('section');
    const navItems = $('.nav-item');
    const header = $('header');

    function atualizarNavbar() {

        const scrollPosition = $(window).scrollTop();
        let activeSecctionIndex = 0;

        if (scrollPosition > 0) {
            header.css('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.1)');
        } else {
            header.css('box-shadow', 'none');
        }

        sections.each(function (i) {
            const sectionTop = $(this).offset().top - 120;

            if (scrollPosition >= sectionTop) {
                activeSecctionIndex = i;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSecctionIndex]).addClass('active');

        if (scrollPosition > 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    }

    // executa quando rolar
    $(window).on('scroll', atualizarNavbar);

    // executa quando a página carregar
    atualizarNavbar();

});