const fs = require('fs');

function fixHTML(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // 1. Quitar SVG del Header y poner Logo con Multiply (Magia quita-cuadritos)
    let headerLogoRegex = /<a href="\/">\s*<svg[\s\S]*?<\/svg>\s*<\/a>/i;
    let headerLogoReplacement = `<a href="/"><img src="img/logo-rentos.png" alt="RentOS Logo" style="height: 80px; display: block; object-fit: contain; mix-blend-mode: multiply; filter: contrast(1.1);"></a>`;
    html = html.replace(headerLogoRegex, headerLogoReplacement);

    // 2. Añadir mix-blend-mode: multiply al Watermark CSS
    html = html.replace(
        /.hero-watermark \{ position: fixed;([^}]+)opacity: 0.12;([^}]+)\}/g,
        '.hero-watermark { position: fixed;$1opacity: 0.12; mix-blend-mode: multiply; filter: grayscale(100%);$2}'
    );

    // 3. Por si acaso GlorIA también tiene cuadritos o fondo raro, aseguramos multiply si aplica
    // En Gloria logo-gloria.png, el fondo es oscuro/variado así que mejor no poner multiply para no manchar el glow, pero dejemoslo.
    
    fs.writeFileSync(filepath, html);
    console.log("Arreglado en " + filepath);
}

fixHTML('../frontend/index.html');
fixHTML('./03_landing/index.html');
