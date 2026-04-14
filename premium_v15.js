const fs = require('fs');

function embedHeader(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Eliminar el div flotante superior
    let headerDivRegex = /<div style="width: 100%; text-align: center; margin-bottom: -4rem; position: relative; z-index: 10;">[\s\S]*?<\/div>/;
    html = html.replace(headerDivRegex, '');

    // 2. Inyectar la imagen justo arriba del <h2> en gloria-text
    // <div class="gloria-text" style="flex: 1;">
    //     <h2...
    let gloriaTextRegex = /<div class="gloria-text" style="flex: 1;">\s*<h2/;
    let injectedHeader = `<div class="gloria-text" style="flex: 1; padding-right: 1rem;">
                    <img src="img/cabecera-gloria.png" alt="GlorIA" style="width: 100%; max-width: 600px; height: auto; margin-bottom: -1rem; object-fit: contain; filter: drop-shadow(0 10px 40px rgba(138, 75, 222, 0.2)); display: block; margin-left: -1rem;">
                    <h2`;
    html = html.replace(gloriaTextRegex, injectedHeader);

    fs.writeFileSync(filepath, html);
    console.log("Encabezado anidado en " + filepath);
}

embedHeader('../frontend/index.html');
embedHeader('./03_landing/index.html');
