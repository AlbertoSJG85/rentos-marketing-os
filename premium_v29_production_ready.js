const fs = require('fs');

function finalizeProduction(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Fix "UUnete" typo
    html = html.replace(/UUnete/g, 'Únete');
    html = html.replace(/nete/g, 'Únete'); // Por si hay basura de codificación

    // 2. Corregir título de la pestaña y Favicon
    // <title>RentOS — El Sistema Operativo Definitivo...</title>
    html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>RentOS — El Sistema Operativo Definitivo</title>');
    
    if (!html.includes('<link rel="icon"')) {
        const favicon = '\n    <link rel="icon" type="image/png" href="img/logo-rentos.png">';
        html = html.replace('</head>', favicon + '\n</head>');
    } else {
        html = html.replace(/<link rel="icon" [\s\S]*?>/, '<link rel="icon" type="image/png" href="img/logo-rentos.png">');
    }

    // 3. Asegurar la frase de cabecera de los ribbons
    const oldPhrase = 'La operativa es ruido hasta que le pones sistema';
    const newPhrase = 'La diferencia no es trabajar más. Es tener a <span class="brand-rent">Rent</span><span class="brand-os">OS</span> contigo.';
    if (html.includes(oldPhrase)) {
        html = html.replace(oldPhrase, newPhrase);
    }

    // 4. Asegurar que RentOS en el pie de página también tenga estilo
    html = html.replace(/nete a <span class="brand-rent">Rent<\/span><span class="brand-os">OS<\/span>/g, 'Únete a <span class="brand-rent">Rent</span><span class="brand-os">OS</span>');

    fs.writeFileSync(filepath, html);
    console.log('Final polishes applied to ' + filepath);
}

finalizeProduction('../frontend/index.html');
finalizeProduction('./03_landing/index.html');
