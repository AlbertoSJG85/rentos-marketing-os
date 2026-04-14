const fs = require('fs');

function fixSpacing(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Cortar el margen inferior extremo de 4rem y apretarlo a 0.5rem (super pegado a las letras)
    html = html.replace(/margin-bottom: 4rem;/g, 'margin-bottom: 0.5rem;');

    // Restablecer el top margin del texto por si causa problemas
    html = html.replace(/<div class="gloria-text" style="flex: 1; margin-top: -1\.5rem;">/g, '<div class="gloria-text" style="flex: 1;">');

    fs.writeFileSync(filepath, html);
    console.log("Apretado arreglado en " + filepath);
}

fixSpacing('../frontend/index.html');
fixSpacing('./03_landing/index.html');
