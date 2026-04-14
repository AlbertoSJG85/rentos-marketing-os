const fs = require('fs');

function setupGloriaHeader(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Quitar el recurso visual actual (el logo viejo del cerebro de la columna)
    // El código actual tenía: <img class="gloria-brain-avatar" src="img/logo-gloria.png" alt="Cerebro de GlorIA" style="width: 180px; height: auto; filter: drop-shadow(0 0 25px rgba(138, 75, 222, 0.4)); animation: float-brain 6s ease-in-out infinite;">
    let gloriaLogoRegex = /<img class="gloria-brain-avatar"[^>]*>/;
    html = html.replace(gloriaLogoRegex, '');

    // Injectar la cabecera arriba del gloria-layout
    // El DOM era:
    // <section class="gloria-section">
    //     <div class="bg-glow-orb"...></div>
    //     <div class="gloria-layout">
    
    let targetHook = /<div class="gloria-layout">/;
    let newHeader = `
            <div style="width: 100%; text-align: center; margin-bottom: 4rem;">
                <img src="img/cabecera-gloria.png" alt="GlorIA" style="max-width: 100%; width: 750px; height: auto; object-fit: contain; filter: drop-shadow(0 10px 40px rgba(138, 75, 222, 0.25)); transform: translateZ(0);">
            </div>
            <div class="gloria-layout">`;
            
    // Asegurarnos de no inyectarlo 2 veces
    if (!html.includes('<img src="img/cabecera-gloria.png"')) {
        html = html.replace(targetHook, newHeader);
        
        // Ajustamos también el layout si necesitamos que respire un poco extra
        // Por ej, el h2 de gloria tenía h2 { ... margin-bottom: 1rem; ...}
        html = html.replace(/<div class="gloria-text" style="flex: 1;">\s*<h2/, '<div class="gloria-text" style="flex: 1; margin-top: -1.5rem;">\n                    <h2');
    }

    fs.writeFileSync(filepath, html);
    console.log("Cabecera GlorIA puesta en " + filepath);
}

setupGloriaHeader('../frontend/index.html');
setupGloriaHeader('./03_landing/index.html');
