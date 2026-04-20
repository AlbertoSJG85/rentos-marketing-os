const fs = require('fs');

function redesignHero(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Limpieza de CSS conflictivo
    // Buscamos las definiciones de .hero, .hero-content y .hero-visual para normalizarlas
    html = html.replace(/\.hero \{[\s\S]*?padding: 8rem 2rem 6rem;[\s\S]*?\}/, `.hero {
            padding: 8rem 5%;
            text-align: left;
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 5rem;
            min-height: 80vh;
        }`);

    html = html.replace(/\.hero-content \{[\s\S]*?\}/, `.hero-content {
            flex: 1;
            position: relative;
            z-index: 2;
        }`);

    html = html.replace(/\.hero-visual \{[\s\S]*?\}/, `.hero-visual {
            flex: 1.2;
            position: relative;
            z-index: 2;
        }`);

    // Eliminar la definición de watermark para que no vuelva
    html = html.replace(/\.hero-watermark \{[\s\S]*?\}/, `.hero-watermark { display: none; }`);
    
    // Quitar transformaciones 3D del contenedor de mockup/video
    html = html.replace(/transform: perspective\(1000px\) rotateY\(-8deg\) rotateX\(4deg\);/, 'transform: none;');
    html = html.replace(/transform: perspective\(1200px\)/, 'transform: none;');

    // 2. Reestructuración del HTML
    // Eliminamos el div de watermark
    html = html.replace(/<div class="hero-watermark"><\/div>/, '');

    // Reemplazamos toda la sección Hero para asegurar una estructura limpia 50/50
    const heroContentRegex = /<section class="hero">[\s\S]*?<\/section>/;
    const newHeroHtml = `
        <section class="hero">
            <!-- Glow background -->
            <div class="bg-glow-orb" style="top: -100px; left: -200px; width: 600px; height: 600px; background: rgba(138, 75, 222, 0.1);"></div>
            
            <div class="hero-content">
                <span class="hero-badge" style="background: rgba(138, 75, 222, 0.1); color: var(--accent); border: 1px solid rgba(138, 75, 222, 0.2); padding: 0.5rem 1rem; border-radius: 50px; font-weight: 700; font-size: 0.85rem; margin-bottom: 2rem; display: inline-block;">EL SISTEMA OPERATIVO PREMIUM</span>
                <h1 style="font-size: 3.8rem; line-height: 1.1; margin-bottom: 1.5rem; color: var(--bg-dark); letter-spacing: -0.04em; font-weight: 900;">
                    <span class="brand-rent">Rent</span><span class="brand-os">OS</span> viene a cambiar <span style="background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 5px 15px rgba(138, 75, 222, 0.2));">cómo gestionas</span> tu operativa.
                </h1>
                <p style="font-size: 1.4rem; color: var(--text-muted); margin-bottom: 3rem; line-height: 1.5;">
                    Deja de perseguir incidencias y empieza a dominar tu negocio. <span class="brand-rent">Rent</span><span class="brand-os">OS</span> automatiza la coordinación, las limpiezas y la comunicación para que tú recuperes el control real.
                </p>
                <div class="hero-actions">
                    <a href="#piloto" class="btn btn-primary" style="padding: 1.2rem 3rem; font-size: 1.2rem; border-radius: 14px; box-shadow: 0 20px 40px var(--accent-glow);">Quiero probarlo GRATIS</a>
                </div>
            </div>
            
            <div class="hero-visual">
                <div style="position: relative; border-radius: 28px; background: #0f172a; padding: 10px; box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1);">
                    <div style="border-radius: 20px; overflow: hidden; position: relative; background: #000; aspect-ratio: 16/9;">
                        <video 
                            id="hero-video"
                            autoplay 
                            loop 
                            playsinline 
                            controls
                            style="width: 100%; height: 100%; object-fit: cover;"
                        >
                            <source src="video/Video_RentOS.mp4" type="video/mp4">
                            Tu navegador no soporta el tag de video.
                        </video>
                    </div>
                </div>
            </div>
        </section>`;

    const finalHtml = html.replace(heroContentRegex, newHeroHtml);
    fs.writeFileSync(filepath, finalHtml);
    console.log('Rediseño Hero 50/50 completado en ' + filepath);
}

redesignHero('../frontend/index.html');
redesignHero('./03_landing/index.html');
