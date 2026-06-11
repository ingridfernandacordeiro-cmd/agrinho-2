<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mídias com JavaScript</title>
    <style>
        /* Um pouco de estilo para organizar a página */
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f4f4f4; }
        .bloco { background: white; padding: 15px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        button { padding: 10px 15px; font-size: 14px; cursor: pointer; background-color: #007BFF; color: white; border: none; border-radius: 5px; }
        button:hover { background-color: #0056b3; }
    </style>
</head>
<body>

    <h1>Interação com Imagens e Vídeos (HTML + JS)</h1>

    <div class="bloco">
        <h2>1. Interação com Imagem</h2>
        <p>Passe o mouse ou clique na imagem abaixo:</p>
        
        <img id="minhaImagem" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" alt="Gatinho" width="300" style="cursor: pointer; transition: 0.3s;">
        
        <p id="textoMensagem" style="font-weight: bold; color: green;"></p>
    </div>

    <div class="bloco">
        <h2>2. Controle de Vídeo por JavaScript</h2>
        
        <video id="meuVideo" width="400" src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
        
        <br><br>
        <button id="btnPlayPause">Dar Play ▶</button>
        <button id="btnMutar">Mudar Som 🔇</button>
    </div>

    <script>
        // --- 1. SCRIPT DA IMAGEM ---
        const imagem = document.getElementById('minhaImagem');
        const mensagem = document.getElementById('textoMensagem');

        // Evento de clique na imagem
        imagem.addEventListener('click', function() {
            mensagem.innerText = "Você clicou no gatinho! Miau! 🐾";
        });

        // Efeito visual quando o mouse passa por cima (Hover)
        imagem.addEventListener('mouseenter', function() {
            imagem.style.transform = "scale(1.05)"; // Aumenta um pouco de tamanho
        });

        // Efeito visual quando o mouse sai de cima
        imagem.addEventListener('mouseleave', function() {
            imagem.style.transform = "scale(1)"; // Volta ao tamanho normal
        });


        // --- 2. SCRIPT DO VÍDEO ---
        const video = document.getElementById('meuVideo');
        const btnPlayPause = document.getElementById('btnPlayPause');
        const btnMutar = document.getElementById('btnMutar');

        // Função para dar Play e Pause
        btnPlayPause.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                btnPlayPause.innerText = "Pausar ⏸";
            } else {
                video.pause();
                btnPlayPause.innerText = "Dar Play ▶";
            }
        });

        // Função para Mutar e Desmutar o áudio
        btnMutar.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                btnMutar.innerText = "Mudar Som 🔇";
            } else {
                video.muted = true;
                btnMutar.innerText = "Ativar Som 🔊";
            }
        });
    </script>

</body>
</html>
