const fs = require('fs');
let html = fs.readFileSync('../frontend/index.html', 'utf8');

// Quitar mi SVG Cerebro Inventado por la imagen real brandeada
let gloriaSVGRegex = /<svg class="gloria-brain-avatar" xmlns="http:\/\/www.w3.org\/2000\/svg"[\s\S]*?<\/svg>/;
let newGloriaIMG = `<img class="gloria-brain-avatar" src="img/logo-gloria.png" alt="Cerebro de GlorIA" style="width: 180px; height: auto; filter: drop-shadow(0 0 25px rgba(138, 75, 222, 0.4)); animation: float-brain 6s ease-in-out infinite;">`;
html = html.replace(gloriaSVGRegex, newGloriaIMG);

fs.writeFileSync('../frontend/index.html', html);
fs.writeFileSync('./03_landing/index.html', html);
