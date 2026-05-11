// Lista de factos e dicas reais do Programa Agrinho
const dicas = [
    "A agricultura sustentável ajuda a preservar as nascentes de água.",
    "O uso de drones no campo reduz o desperdício de recursos.",
    "O Agrinho envolve mais de 800 mil alunos todos os anos no Paraná.",
    "Pequenas ações na escola podem transformar a realidade do campo."
];

function mostrarDicaAleatoria() {
    const indice = Math.floor(Math.random() * dicas.length);
    console.log("Dica carregada: " + dicas[indice]);
    // Pode adicionar um alerta ou mudar um texto no HTML com isto
    alert("Dica Agrinho: " + dicas[indice]);
}

// Mensagem de boas-vindas no consola para depuração
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal Agrinho carregado com fontes seguras.");
});
