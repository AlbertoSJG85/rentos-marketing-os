const fs = require('fs');

function finalizeFaviconAndHeader(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Actualizar el favicon al modo cuadrado de alta resolución
    html = html.replace(/<link rel="icon" [\s\S]*?>/, '<link rel="icon" type="image/png" href="img/favicon-square.png">');

    // 2. Aumentar el tamaño del logo en el header de la página (de 80px a 100px)
    html = html.replace(/height: 80px;/, 'height: 100px;');

    fs.writeFileSync(filepath, html);
    console.log('Icono de pestaña y logo de cabecera actualizados en ' + filepath);
}

finalizeFaviconAndHeader('../frontend/index.html');
finalizeFaviconAndHeader('./03_landing/index.html');
