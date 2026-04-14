const fs = require('fs');

function empujarIzquierda(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Mover 60 píxeles hacia la izquierda el límite inicial de la imagen para que desborde el reading layout.
    // El dom inyectado era: margin-left: -1rem;
    html = html.replace(/margin-left: -1rem;/g, 'margin-left: -5rem;');

    fs.writeFileSync(filepath, html);
    console.log("Expansión Izquierda en " + filepath);
}

empujarIzquierda('../frontend/index.html');
empujarIzquierda('./03_landing/index.html');
