const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// Extraer header SVG inventado y poner IMG real
let headerLogoContainerRegex = /<div style="display: flex; flex-direction: column; justify-content: center;" class="header-logo-container">\s*<a href="\/">[\s\S]*?<\/svg><\/a>/;
let newHeaderLogoContainer = `<div style="display: flex; flex-direction: column; justify-content: center;" class="header-logo-container">
            <a href="/"><img src="img/logo-rentos.png" alt="RentOS" style="height: 80px; display: block; object-fit: contain;"></a>`;

html = html.replace(headerLogoContainerRegex, newHeaderLogoContainer);

// Extraer el Watermark SVG y poner div con img real de fondo (marcado opaco)
let watermarkCSSRegex = /\.hero-watermark \{[\s\S]*?\}/;
let newWatermarkCSS = `.hero-watermark { position: fixed; top: 50%; left: 50%; width: 100vw; height: 100vh; background-image: url('img/logo-rentos.png'); background-size: 50%; background-repeat: no-repeat; background-position: center; opacity: 0.12; z-index: 0; pointer-events: none; transform: translate(-50%, -50%); }`;
html = html.replace(watermarkCSSRegex, newWatermarkCSS);

// Quitar el svg inline del HTML que pudiera haber quedado (si usé svg inline para Watermark)
let watermarkInlineSVGRegex = /<svg class="hero-watermark"[\s\S]*?<\/svg>/;
html = html.replace(watermarkInlineSVGRegex, '<div class="hero-watermark"></div>');

// Tambien me aseguro de que el <div class="hero-watermark"></div> exista si era un background anterior
if (!html.includes('<div class="hero-watermark"></div>')) {
    html = html.replace(/<div class="hero-content">/, '<div class="hero-watermark"></div>\n            <div class="hero-content">');
}

fs.writeFileSync('../frontend/index.html', html);
fs.writeFileSync('./03_landing/index.html', html);
console.log('Iteracion 6: Logo Final');
