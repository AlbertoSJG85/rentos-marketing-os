const fs = require('fs');

function fixLogoSource(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Nos aseguramos de que el src apunte a logo-rentos.png que es el archivo que acabamos de copiar
    // Buscamos cualquier referencia al logo en la cabecera y la normalizamos
    html = html.replace(/src="img\/logo_RentOS\.png"/g, 'src="img/logo-rentos.png"');
    html = html.replace(/src="img\/logo\.png"/g, 'src="img/logo-rentos.png"');

    fs.writeFileSync(filepath, html);
    console.log('Ruta del logo normalizada en ' + filepath);
}

fixLogoSource('../frontend/index.html');
fixLogoSource('./03_landing/index.html');
