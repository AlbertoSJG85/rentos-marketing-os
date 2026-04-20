const fs = require('fs');

function integrateVideoHero(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Localizamos el bloque hero-mockup-container para sustituirlo por el video
    // Buscamos desde el div contenedor hasta su cierre
    const mockupRegex = /<div class="hero-mockup-container"[\s\S]*?<!-- Row 2: Acción[\s\S]*?<\/div>[\s\S]*?<\/div>/;
    
    // Nueva estructura para el vídeo
    const videoHeroHtml = `
                <div class="hero-video-wrapper" style="position: relative; border-radius: 24px; padding: 6px; background: linear-gradient(135deg, rgba(138, 75, 222, 0.4), rgba(0, 209, 255, 0.2)); box-shadow: 0 50px 100px -20px rgba(138, 75, 222, 0.5); transform: rotateY(-8deg) rotateX(2deg); transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer;" onmouseover="this.style.transform='rotateY(0deg) rotateX(0deg) scale(1.02)'" onmouseout="this.style.transform='rotateY(-8deg) rotateX(2deg) scale(1)'">
                    <div style="background: #000; border-radius: 20px; overflow: hidden; line-height: 0;">
                        <video 
                            id="hero-video"
                            autoplay 
                            muted 
                            loop 
                            playsinline 
                            style="width: 100%; height: auto; display: block; filter: brightness(1.1);"
                        >
                            <source src="video/Video_RentOS.mp4" type="video/mp4">
                            Tu navegador no soporta el tag de video.
                        </video>
                    </div>
                </div>`;

    // Realizamos la sustitución
    const newHtml = html.replace(mockupRegex, videoHeroHtml);
    
    if (newHtml !== html) {
        fs.writeFileSync(filepath, newHtml);
        console.log('Vídeo integrado exitosamente en ' + filepath);
    } else {
        console.log('No se pudo encontrar el contenedor del mockup en ' + filepath);
    }
}

integrateVideoHero('../frontend/index.html');
integrateVideoHero('./03_landing/index.html');
