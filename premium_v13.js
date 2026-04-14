const fs = require('fs');

function jamItDown(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Ahora mismo tiene: margin-bottom: 0.5rem;
    // O tal vez gloria-layout tiene margin-top
    
    // Primero, le voy a encajar un margen negativo duro a la cabecera
    html = html.replace(/margin-bottom: 0\.5rem;/g, 'margin-bottom: -4rem; position: relative; z-index: 10;');

    // Segundo, gloria-layout tenía gap: 5rem por ser un flex antiguo. Como ahora es hijo de una columna, el gap interno de gloria-layout aplica a sus columnas (Texto y Movil) pero no hacia arriba.
    // Aunque, gloria-text h2 tiene un margin-bottom o padding. Vamos a buscar si gloria-layout tiene margin-top u algo
    
    fs.writeFileSync(filepath, html);
    console.log("Aplastado en " + filepath);
}

jamItDown('../frontend/index.html');
jamItDown('./03_landing/index.html');
