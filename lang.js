const translations = {
    pt: {
        // Navbar
        nav_home: "Início",
        nav_services: "Serviços",
        nav_about: "Sobre nós",
        nav_contact: "Contate-nos",

        // Home / CTA
        hero_title: "Fazemos da sua empresa um fenomeno extraordinario",
        hero_sub: "Olá somos a Auron",
        cta_about: "Sobre nós",

        // Services
        services_title: "Nossos Serviços",
        services_subtitle: "Soluções digitais sob medida para impulsionar seu negócio.",
        service1_title: "Desenvolvimento Web",
        service1_desc: "Sistemas web personalizados, rápidos, seguros e escaláveis, pensados exatamente para a sua necessidade.",
        service2_title: "UI / UX Design",
        service2_desc: "Interfaces modernas, intuitivas e responsivas que melhoram a experiência do usuário e aumentam conversões.",
        service3_title: "Automação de Processos",
        service3_desc: "Automatizamos tarefas repetitivas para otimizar tempo, reduzir erros e aumentar a produtividade.",
        service4_title: "Manutenção & Suporte",
        service4_desc: "Atualizações, correções e suporte contínuo para garantir estabilidade e desempenho do seu sistema.",

        // About
        about_title: "Sobre Nós",
        about_card1_title: "Sobre a Auron",
        about_card1_desc: "A Auron é uma empresa focada no desenvolvimento de sistemas web e sites modernos, criada com o objetivo de ajudar empresas e projetos a se destacarem no ambiente digital. Mesmo sendo recente no mercado, buscamos unir tecnologia, criatividade e eficiência para entregar soluções que realmente atendam às necessidades de cada cliente.",
        about_card2_title: "Nosso Propósito",
        about_card2_desc: "Nosso trabalho envolve a criação de sites profissionais, sistemas personalizados e aplicações web, sempre priorizando desempenho, organização e uma boa experiência para o usuário. Acreditamos que cada projeto é único, por isso desenvolvemos soluções adaptadas às demandas específicas de cada negócio. Na Auron, nosso propósito é transformar ideias em soluções digitais funcionais, ajudando empresas a fortalecer sua presença online e a crescer no mundo digital.",

        // Contact
        contact_title: "Contato",
        contact_subtitle: "Vamos conversar sobre como podemos transformar sua ideia em um sistema web eficiente.",
        contact_info_title: "Fale com a Auron_",
        contact_name: "Seu nome",
        contact_email: "Seu e-mail",
        contact_subject: "Assunto",
        contact_message: "Digite sua mensagem...",
        contact_btn: "Enviar mensagem",

        // Footer
        footer_desc: "Desenvolvimento de sistemas web sob medida, transformando ideias em soluções digitais.",
        footer_links_title: "Links",
        footer_social_title: "Redes sociais",
        footer_copy: "© 2026 Auron — Todos os direitos reservados",
        footer_link_home: "Início",
        footer_link_about: "Sobre nós",
        footer_link_services: "Serviços",
        footer_link_contact: "Contato",
    },
    en: {
        // Navbar
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About us",
        nav_contact: "Contact us",

        // Home / CTA
        hero_title: "We make your company an extraordinary phenomenon",
        hero_sub: "Hi, we are Auron",
        cta_about: "About us",

        // Services
        services_title: "Our Services",
        services_subtitle: "Custom digital solutions to boost your business.",
        service1_title: "Web Development",
        service1_desc: "Custom, fast, secure and scalable web systems, designed exactly for your needs.",
        service2_title: "UI / UX Design",
        service2_desc: "Modern, intuitive and responsive interfaces that improve user experience and increase conversions.",
        service3_title: "Process Automation",
        service3_desc: "We automate repetitive tasks to save time, reduce errors and increase productivity.",
        service4_title: "Maintenance & Support",
        service4_desc: "Updates, fixes and ongoing support to ensure stability and performance of your system.",

        // About
        about_title: "About Us",
        about_card1_title: "About Auron",
        about_card1_desc: "Auron is a company focused on developing modern web systems and websites, created with the goal of helping businesses and projects stand out in the digital environment. Even though we are new to the market, we seek to combine technology, creativity and efficiency to deliver solutions that truly meet each client's needs.",
        about_card2_title: "Our Purpose",
        about_card2_desc: "Our work involves creating professional websites, custom systems and web applications, always prioritizing performance, organization and a great user experience. We believe every project is unique, so we develop solutions tailored to the specific demands of each business. At Auron, our purpose is to transform ideas into functional digital solutions, helping companies strengthen their online presence and grow in the digital world.",

        // Contact
        contact_title: "Contact",
        contact_subtitle: "Let's talk about how we can transform your idea into an efficient web system.",
        contact_info_title: "Talk to Auron_",
        contact_name: "Your name",
        contact_email: "Your e-mail",
        contact_subject: "Subject",
        contact_message: "Type your message...",
        contact_btn: "Send message",

        // Footer
        footer_desc: "Custom web systems development, transforming ideas into digital solutions.",
        footer_links_title: "Links",
        footer_social_title: "Social media",
        footer_copy: "© 2026 Auron — All rights reserved",
        footer_link_home: "Home",
        footer_link_about: "About us",
        footer_link_services: "Services",
        footer_link_contact: "Contact",
    }
};

function setLang(lang) {
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll('#lang-selector button').forEach(btn => {
        btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });
}

const savedLang = localStorage.getItem('lang') || 'pt';
setLang(savedLang);