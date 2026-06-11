<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imagens e Vídeos em HTML</title>
</head>
<body>

    <h1>Galeria de Mídia em HTML</h1>
    <hr>

    <h2>1. Seção de Imagens</h2>
    
    <img src="foto.jpg" alt="Sua foto local" width="400">
    
    <a href="https://www.google.com" target="_blank">
        <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" alt="Gato da internet que leva ao Google" width="400">
    </a>

    <hr>

    <h2>2. Seção de Vídeos</h2>

    <h3>Vídeo Arquivo (.mp4)</h3>
    <video width="400" controls poster="capa-do-video.jpg">
        <source src="meu_video.mp4" type="video/mp4">
        Seu navegador não suporta a tag de vídeo.
    </video>

    <h3>Vídeo do YouTube</h3>
    <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Vídeo do YouTube" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>

</body>
</html>
