// ===== Contato: abas (diagnóstico / mensagem) =====

const tabButtons = document.querySelectorAll('.contact-tabs .tab-btn');
const tabPanels = document.querySelectorAll('.contact-card .tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const alvo = btn.dataset.tab;
        tabButtons.forEach(b => b.classList.toggle('active', b === btn));
        tabPanels.forEach(p => p.classList.toggle('active', p.dataset.panel === alvo));
    });
});

// ===== Aba Diagnóstico -> WhatsApp =====

const diagForm = document.getElementById('diagnostico_form');

// Número de WhatsApp da Auron (formato internacional, sem espaços ou símbolos)
const AURON_WHATSAPP = '5519992675305';

diagForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('diag_nome').value.trim();
    const email = document.getElementById('diag_email').value.trim();
    const tipoProjeto = document.getElementById('diag_tipo').value;
    const prazo = document.getElementById('diag_prazo').value;
    const descricao = document.getElementById('diag_descricao').value.trim();

    // (Opcional) Salvar o lead em um backend antes de ir pro WhatsApp.
    // Descomente quando o endpoint PHP existir em api/salvar_diagnostico.php:
    //
    // const whatsapp = document.getElementById('diag_whatsapp').value.trim();
    // const dados = { nome, whatsapp, email, tipo_projeto: tipoProjeto, prazo, descricao };
    // try {
    //     await fetch('api/salvar_diagnostico.php', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(dados)
    //     });
    // } catch (err) {
    //     console.error('Erro ao salvar diagnóstico:', err);
    // }

    // Monta a mensagem e redireciona pro WhatsApp
    const mensagem =
        `Olá! Gostaria de solicitar um *diagnóstico* para o meu projeto:\n\n` +
        `*Nome:* ${nome}\n` +
        `*E-mail:* ${email}\n` +
        `*Tipo de projeto:* ${tipoProjeto}\n` +
        `*Prazo desejado:* ${prazo}\n` +
        `*Descrição:* ${descricao}`;

    const url = `https://wa.me/${AURON_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

    diagForm.reset();
});
