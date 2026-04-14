const fs = require('fs');

function fixFlexbox(filepath) {
    if (!fs.existsSync(filepath)) return;
    let html = fs.readFileSync(filepath, 'utf8');

    // Forzo el section a columna para matar el display: flex horizontal heredado del theme viejo
    html = html.replace(/<section class="gloria-section">/, '<section class="gloria-section" style="flex-direction: column; align-items: center;">');

    // Por las dudas el CSS original en "/* GlorIA Section */" esté por ahí fastidiando:
    html = html.replace(/\.gloria-section \{[^}]+display: flex;[^}]+gap:[^}]+align-items:[^}]+}/g, 
        '.gloria-section {\n            padding: 8rem 2rem;\n            max-width: 1000px;\n            margin: 0 auto;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }'
    );

    fs.writeFileSync(filepath, html);
    console.log("Flexbox arreglado a Vertical en " + filepath);
}

fixFlexbox('../frontend/index.html');
fixFlexbox('./03_landing/index.html');
