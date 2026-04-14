const fs = require('fs');

function offsetHeader(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Desplazar un poco la cabecera a la izquierda (inyectando translateX)
    // El dom original inyectado era text-align: center y transform: translateZ(0);
    // Si ya le puse translateX en alguna iteración, no lo repito o lo actualizo, sino lo pongo:
    if(html.includes('transform: translateZ(0);')) {
        html = html.replace(/transform: translateZ\(0\);/g, 'transform: translateZ(0) translateX(-4.5rem);');
    } else if (html.includes('translateX(-4.5rem)')) {
        // Nada, ya esta
    }

    fs.writeFileSync(filepath, html);
    console.log("Nueva cabecera con offset X aplicado en " + filepath);
}

offsetHeader('../frontend/index.html');
offsetHeader('./03_landing/index.html');
