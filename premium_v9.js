const fs = require('fs');

function cleanHTML(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Quitar multiply del cabecero
    html = html.replace(/mix-blend-mode:\s*multiply;\s*filter:\s*contrast\(1\.1\);/g, '');

    // Quitar multiply de la marca de agua
    html = html.replace(/mix-blend-mode:\s*multiply;\s*/g, '');

    fs.writeFileSync(filepath, html);
    console.log("Limpiado en " + filepath);
}

cleanHTML('../frontend/index.html');
cleanHTML('./03_landing/index.html');
