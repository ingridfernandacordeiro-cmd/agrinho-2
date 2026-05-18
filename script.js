
// Lista expandida de factos e dicas reais do Programa Agrinho
const dicas = [
    "A agricultura sustentável ajuda a preservar as nascentes de água.",
    "O uso de drones no campo reduz o desperdício de recursos e defensivos.",
    "O Agrinho envolve mais de 800 mil alunos todos os anos no Paraná.",
    "Pequenas ações na escola podem transformar a realidade do campo.",
    "O programa existe há mais de 25 anos, transformando a educação rural.",
    "A rotação de culturas protege o solo contra a erosão e mantém os nutrientes.",
    "A energia solar no campo reduz custos e gera energia limpa para a produção.",
    "A agricultura familiar é responsável por grande parte dos alimentos na nossa mesa."
];

function mostrarDicaAleatoria() {
    const indice = Math.floor(Math.random() * dicas.length);
    
    // Altera o texto diretamente na estrutura da página
    const elementoTexto = document.getElementById("texto-dica");
    if (elementoTexto) {
        elementoTexto.textContent = dicas[indice];
    }
    
    console.log("Dica carregada: " + dicas[indice]);
}

// Inicialização segura dos eventos
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal Agrinho carregado com fontes seguras.");
    
    const botao = document.getElementById("btn-dica");
    if (botao) {
        botao.addEventListener("click", mostrarDicaAleatoria);
    }
});
