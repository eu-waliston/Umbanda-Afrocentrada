// // Simulação de funcionalidade dos botões de compra
// document.getElementById('cartao-btn').addEventListener('click', function (e) {


// document.getElementById('pix-btn').addEventListener('click', function (e) {

// });

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