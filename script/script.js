// Simulação de funcionalidade dos botões de compra
document.getElementById('cartao-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Redirecionando para página de pagamento com cartão...\n\nEm um site real, aqui você seria redirecionado para uma plataforma de pagamento como Mercado Pago, Stripe ou PagSeguro.');
});

document.getElementById('pix-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Gerando código PIX...\n\nEm um site real, aqui seria gerado um código PIX dinâmico ou exibida uma chave PIX para pagamento.');
});

// Efeito visual para os cards ao passar o mouse
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(212, 175, 55, 0.2)';
        this.style.borderColor = '#d4af37';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
        this.style.borderColor = 'rgba(212, 175, 55, 0.3)';
    });
});