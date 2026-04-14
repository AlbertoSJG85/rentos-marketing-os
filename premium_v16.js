const fs = require('fs');

function engordarHeader(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Desatar topes de 600px y aplicar multiplicación de escala nativa clavando el origen en la esquina inferior izquierda
    // Asi respira desde la linea izquierda y revienta hacia la derecha y arriba
    html = html.replace(/max-width: 600px;/g, 'max-width: none; transform: scale(1.18); transform-origin: left bottom;');

    fs.writeFileSync(filepath, html);
    console.log("Crecimiento aplicado en " + filepath);
}

engordarHeader('../frontend/index.html');
engordarHeader('./03_landing/index.html');
