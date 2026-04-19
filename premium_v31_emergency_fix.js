const fs = require('fs');

function revertAndFixAll(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Revertir favicon al original rectangular
    html = html.replace(/<link rel="icon" type="image\/png" href="img\/favicon-square\.png">/, '<link rel="icon" type="image/png" href="img/logo-rentos.png">');
    html = html.replace(/<link rel="icon" [\s\S]*?>/, '<link rel="icon" type="image/png" href="img/logo-rentos.png">');

    // 2. Revertir tamaño del logo en el header a 80px (por seguridad)
    html = html.replace(/height: 100px;/, 'height: 80px;');

    // 3. Cambiar la frase estratégica que faltó por un reemplazo parcial anterior
    const oldPhrase = 'La operativa es <span style="color: #F87171;">ruido</span> hasta que le pones <span style="color: var(--accent);">sistema</span>';
    const newPhrase = 'La diferencia no es trabajar más. Es tener a <span class="brand-rent">Rent</span><span class="brand-os">OS</span> contigo.';
    if (html.includes(oldPhrase)) {
        html = html.replace(oldPhrase, newPhrase);
    } else {
        // Por si la otra versión sin spans está ahí
        html = html.replace(/La operativa es ruido hasta que le pones sistema/g, newPhrase);
    }

    // 4. Arreglar el desastre de "ÚÚÚÚnete" y caracteres rotos en el pie
    // Limpiamos la línea del footer entera para ir sobre seguro
    const footerJoinRegex = /<p[^>]*>.*?nete a.*?<\/p>/g;
    const cleanFooterJoin = '<p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 3rem;">Únete a <span class="brand-rent">Rent</span><span class="brand-os">OS</span>. Empieza hoy mismo.</p>';
    html = html.replace(footerJoinRegex, cleanFooterJoin);

    fs.writeFileSync(filepath, html);
    console.log('Correcciones críticas aplicadas en ' + filepath);
}

revertAndFixAll('../frontend/index.html');
revertAndFixAll('./03_landing/index.html');
