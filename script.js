// Gerenciador de Fatos do Agrinho
function verificarFato(opcao) {
    const respostas = {
        1: "Verdadeiro! O Agrinho atende mais de 800 mil alunos anualmente.",
        2: "Verdadeiro! O programa existe há quase 30 anos no Paraná."
    };
    
    console.log("Iniciando verificação de fonte...");
    alert(respostas[opcao] || "Informação em análise pela FAEP.");
}

// Exemplo de como gerenciar eventos de clique de forma limpa
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema Agrinho carregado com fontes seguras.");
});
