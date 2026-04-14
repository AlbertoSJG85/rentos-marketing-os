const fs = require('fs');

function suckTextUp(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Mover el margen inferior de la cabecera para atrapar todo el texto de abajo
    // El dom original inyectado era: margin-bottom: -1rem;
    html = html.replace(/margin-bottom: -1rem;/g, 'margin-bottom: -3.5rem; position: relative; z-index: 10;');

    fs.writeFileSync(filepath, html);
    console.log("Succión CSS aplicada en " + filepath);
}

suckTextUp('../frontend/index.html');
suckTextUp('./03_landing/index.html');
