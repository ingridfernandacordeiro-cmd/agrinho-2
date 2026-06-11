/**
 * Portal Agrinho 2026 - Scripts de Interatividade e Controle de Dados
 */

// Banco de dados expandido com fatos reais sobre sustentabilidade e o programa
const dicas = [
    "A agricultura sustentável baseia-se no plantio direto para evitar a erosão e preservar as nascentes de água.",
    "O uso programado de drones no monitoramento do campo reduz em até 30% o desperdício de insumos agrícolas.",
    "O Programa Agrinho mobiliza anualmente mais de 800 mil alunos e 50 mil professores no Estado do Paraná.",
    "Práticas simples de compostagem orgânica nas escolas reduzem o lixo urbano e geram adubo de alta qualidade.",
    "Criado há mais de 25 anos, o Agrinho é pioneiro em levar a educação ambiental de forma integrada e transversal.",
    "A rotação sistemática de culturas quebra o ciclo de pragas de forma natural, diminuindo a dependência de defensivos.",
    "A captação e uso de energia solar em propriedades rurais reduz emissões de carbono e barateia o custo da produção.",
    "A agricultura familiar responde pelo cultivo de cerca de 70% dos alimentos frescos consumidos diariamente no Brasil."
];

/**
 * Sorteia uma dica do banco de dados e atualiza dinamicamente o painel HTML
 */
function mostrarDicaAleatoria() {
    const indice = Math.floor(Math.random() * dicas.length);
    
    // Captura o parágrafo pelo ID único de destino
    const elementoTexto = document.getElementById("texto-dica");
    
    if (elementoTexto) {
        // Altera o conteúdo sem recarregar a página e sem travar o navegador
        elementoTexto.textContent = dicas[indice];
        console.log("Dica injetada via DOM com sucesso: [" + indice + "]");
    } else {
        console.error("Erro: O elemento '#texto-dica' não foi localizado na árvore DOM.");
    }
}

/**
 * Controla o envio do formulário de inscrição de forma assíncrona/simulada
 * @param {Event} event - O evento de submit do formulário
 */
function gerenciarEnvioFormulario(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    const msgSucesso = document.getElementById('msg-sucesso');
    const formulario = event.target;

    if (msgSucesso) {
        msgSucesso.style.display = 'block';
        console.log("Formulário enviado com sucesso. Kit Regulamento solicitado.");
        
        // Limpa os campos do formulário após o envio bem-sucedido
        formulario.reset();
        
        // Opcional: Oculta a mensagem de sucesso após 7 segundos
        setTimeout(() => {
            msgSucesso.style.display = 'none';
        }, 7000);
    }
}

/**
 * Escuta o carregamento estrutural do documento para ligar os gatilhos com segurança
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portal Agrinho carregado. Inicializando motores de eventos JavaScript...");
    
    // --- GATILHO 1: Botão de Dicas (Página Inicial) ---
    const botaoDica = document.getElementById("btn-dica");
    if (botaoDica) {
        botaoDica.addEventListener("click", mostrarDicaAleatoria);
    }

    // --- GATILHO 2: Formulário de Contato (Página de Concursos) ---
    const formularioContato = document.getElementById('form-contato');
    if (formularioContato) {
        formularioContato.addEventListener('submit', gerenciarEnvioFormulario);
    }
});
