$(document).ready(function () {

    // Observa os elementos com a classe .reveal e adiciona .visible quando entram na tela
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(function (el) {
        revealObserver.observe(el);
    });

    // Observa os containers de cards e adiciona delay progressivo em cada filho
    const cardObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.service-card, .about-card');
                cards.forEach(function (card, index) {
                    setTimeout(function () {
                        card.classList.add('visible');
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.services-container, .about-text').forEach(function (el) {
        cardObserver.observe(el);
    });

    // Efeito de digitação no subtítulo da hero
    const typeEl = document.querySelector('.description-special');

    if (typeEl) {
        // Pega o texto atual (pode ser PT ou EN dependendo do idioma salvo)
        const fullText = typeEl.textContent.trim();
        typeEl.textContent = '';
        typeEl.style.borderRight = '2px solid #fff';

        let i = 0;
        function type() {
            if (i < fullText.length) {
                typeEl.textContent += fullText.charAt(i);
                i++;
                setTimeout(type, 60);
            } else {
                // Remove o cursor piscando após terminar
                setTimeout(function () {
                    typeEl.style.borderRight = 'none';
                }, 800);
            }
        }

        // Pequeno delay antes de começar a digitar
        setTimeout(type, 600);
    }

    // Adiciona backdrop-filter quando der scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').css('backdrop-filter', 'blur(10px)');
        } else {
            $('header').css('backdrop-filter', 'none');
        }
    });

});