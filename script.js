// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Variáveis de interação
    const btnInteragir = document.getElementById('btn-interagir');
    const inputNome = document.getElementById('input-nome');
    const mainTitle = document.getElementById('main-title');
    const themeBtn = document.getElementById('theme-btn');
    const form = document.getElementById('meu-formulario');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    // 2. Função de Personalização (JS manipula o texto do DOM)
    btnInteragir.addEventListener('click', () => {
        const nome = inputNome.value.trim();
        
        if (nome !== "") {
            // Alteração dinâmica do elemento H1
            mainTitle.innerText = `Olá, ${nome}! Conecte-se com a Sustentabilidade.`;
            
            // Esconde a div de entrada para limpar o visual
            inputNome.parentElement.style.opacity = '0';
            setTimeout(() => {
                inputNome.parentElement.style.display = 'none';
            }, 500);
            
            console.log(`Usuário personalizado: ${nome}`);
        } else {
            alert("Por favor, insira seu nome para uma melhor experiência!");
        }
    });

    // 3. Função Modo Escuro (Manipulação de Classe CSS)
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Feedback visual no botão
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.innerText = "☀️";
        } else {
            themeBtn.innerText = "🌑";
        }
    });

    // 4. Manipulação de Formulário Semântico
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recarregar a página
        
        const userEmail = document.getElementById('email').value;
        
        // Simulação de processamento de informação
        if (userEmail) {
            form.style.display = 'none';
            msgSucesso.classList.remove('hidden');
            msgSucesso.style.color = '#1b5e20';
            msgSucesso.style.fontWeight = 'bold';
        }
    });

    // 5. Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
