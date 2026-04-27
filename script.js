// 1. Armazenamento de variáveis e manipulação do DOM
const btnWelcome = document.getElementById('btn-welcome');
const welcomeText = document.getElementById('welcome-text');
const userNameInput = document.getElementById('user-name');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

// Função para personalizar a saudação
btnWelcome.addEventListener('click', () => {
    const name = userNameInput.value;
    if (name) {
        // Altera o conteúdo HTML dinamicamente
        welcomeText.innerText = `Olá, ${name}! Vamos cultivar o futuro juntos?`;
        userNameInput.style.display = 'none';
        btnWelcome.style.display = 'none';
    }
});

// Função para alternar entre modo claro e escuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Efeito visual simples no botão
    themeToggle.style.transform = 'scale(1.2)';
    setTimeout(() => themeToggle.style.transform = 'scale(1)', 200);
});

// Manipulação de formulário
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    contactForm.classList.add('hidden');
    feedback.classList.remove('hidden');
    
    // Log de feedback no console (Critério de erro 0)
    console.log("Inscrição realizada com sucesso!");
});
