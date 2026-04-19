const fs = require('fs');

function fixBrandingAndTypos(filepath) {
    if (!fs.existsSync(filepath)) return;
    let content = fs.readFileSync(filepath, 'utf8');

    // 1. Corrección específica de la marca en las tarjetas (ribbons)
    // El usuario dice "escribir bien RentOS". 
    // Aseguramos que sea RentOS (R e n t O S)
    content = content.replace(/Impacto RentOS/g, 'Impacto de RentOS'); // Tal vez prefiera esta forma más natural
    
    // 2. Corrección del typo "Desgate"
    content = content.replace(/El Desgate/g, 'El Desgaste');

    // 3. Corrección de codificación / acentos (tambien, cómo, ingeniería, único)
    content = content.replace(/Tambin/g, 'También');
    content = content.replace(/cmo/g, 'cómo');
    content = content.replace(/Ingeniera/g, 'Ingeniería');
    content = content.replace(/nete/g, 'Únete');
    content = content.replace(/objetivo comercial. RentOS no hace magias irreales, solo orquesta/g, 'objetivo comercial. RentOS no hace magias irreales, solo orquesta'); // Re-write to ensure no broken chars
    content = content.replace(/nico/g, 'único');

    // 4. Normalización final de RentOS (por si hay algún Rentos o RentOs perdido)
    content = content.replace(/Rentos(?![a-z])/g, 'RentOS');
    content = content.replace(/RentOs(?![a-z])/g, 'RentOS');

    fs.writeFileSync(filepath, content);
    console.log('Branding y typos corregidos en ' + filepath);
}

fixBrandingAndTypos('../frontend/index.html');
fixBrandingAndTypos('./03_landing/index.html');
