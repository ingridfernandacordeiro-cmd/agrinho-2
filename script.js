// Aguarda o carregamento do HTML para não dar erro de "null"
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Variáveis para armazenar elementos
    const btnInteragir = document.getElementById('btn-interagir');
    const inputNome = document.getElementById('input-nome');
    const tituloPrincipal = document.getElementById('main-title');
    const themeBtn = document.getElementById('theme-btn');
    const form = document.getElementById('meu-formulario');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    // 2. Função de Personalização (Manipulação de Texto)
    btnInteragir.addEventListener('click', () => {
        const nomeUsuario = inputNome.value.trim();
        
        if(nomeUsuario !== "") {
            // Processa a informação antes de exibir
            const saudacao = `Bem-vindo, ${nomeUsuario}!`;
            tituloPrincipal.innerText = saudacao;
            inputNome.style.display = 'none';
            btnInteragir.innerText = "Nome Registrado ✓";
        } else {
            alert("Por favor, digite seu nome para personalizar o site.");
        }
    });

    // 3. Função de Modo Escuro (Manipulação de CSS via JS)
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Altera o texto do botão dinamicamente
        if(document.body.classList.contains('dark-mode')) {
            themeBtn.innerText = "Modo Claro";
        } else {
            themeBtn.innerText = "Modo Escuro";
        }
    });

    // 4. Manipulação de Formulário
    form.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita que a página recarregue
        form.classList.add('hidden'); // Esconde o formulário
        msgSucesso.classList.remove('hidden'); // Mostra a div de sucesso
        console.log("Formulário enviado com sucesso!");
    });

});
